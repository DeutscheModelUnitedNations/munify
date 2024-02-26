"use client";
import React, { useEffect, useState, useContext } from "react";
import HeaderTemplate from "@/components/header_template";
import WidgetBoxTemplate from "@/components/widget_box_template";
import { ScrollPanel } from "primereact/scrollpanel";
import { SelectButton } from "primereact/selectbutton";
import ConfigWrapper from "@/components/dashboard/chair/config_wrapper";
import getCountryNameByCode from "@/misc/get_country_name_by_code";
import { NormalFlag as Flag } from "@/components/flag_templates";
import { useI18nContext } from "@/i18n/i18n-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCheck,
  faUserXmark,
  faUserClock,
} from "@fortawesome/pro-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { backend } from "@/services/backend";
import { toastError } from "@/fetching/fetching_utils";
import { $Enums } from "../../../../../../../../backend/prisma/generated/client";
import PresenceWidget from "@/components/attendance/presence_widget";
import {
  CommitteeIdContext,
  ConferenceIdContext,
} from "@/contexts/committee_data";
import AttendanceTable, {
  DelegationDataType,
} from "@/components/attendance/attendance_table";

export default function ChairAttendees() {
  const { LL, locale } = useI18nContext();
  const conferenceId = useContext(ConferenceIdContext);
  const committeeId = useContext(CommitteeIdContext);

  const [delegationData, setDelegationData] = useState<DelegationDataType>([]);
  const [nonStateActorsData, setNonStateActorsData] =
    useState<DelegationDataType>([]);
  const [forcePresenceWidgetUpdate, setForcePresenceWidgetUpdate] =
    useState(false);

  async function getDelegationData() {
    if (!conferenceId || !committeeId) return;
    await backend.conference[conferenceId].committee[committeeId].delegations
      .get()
      .then((response) => {
        setDelegationData(
          response.data?.filter(
            (delegation) =>
              delegation.nation.type === $Enums.NationVariant.NATION,
          ) || null,
        );
        setNonStateActorsData(
          response.data?.filter(
            (delegation) =>
              delegation.nation.type === $Enums.NationVariant.NON_STATE_ACTOR,
          ) || null,
        );
      })
      .catch((error) => {
        toastError(error);
      });
  }

  useEffect(() => {
    getDelegationData();
    const intervalAPICall = setInterval(() => {
      getDelegationData();
    }, 5000);
    return () => clearInterval(intervalAPICall);
  }, []);

  async function updatePresence(
    delegationId: string,
    memberId: string,
    presence: $Enums.Presence,
  ) {
    if (!conferenceId || !committeeId) return;
    await backend.conference[conferenceId].delegation[delegationId].presence[
      memberId
    ]
      .post({
        presence,
      })
      .then(() => {
        setForcePresenceWidgetUpdate(!forcePresenceWidgetUpdate);
        getDelegationData();
      })
      .catch((error) => {
        toastError(error);
      });
  }

  return (
    <>
      <div className="flex-1 flex flex-col">
        <HeaderTemplate>
          <PresenceWidget
            showExcusedSeperately={true}
            forceUpdate={forcePresenceWidgetUpdate}
          />
        </HeaderTemplate>
        <ScrollPanel className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="flex-1 flex p-4 gap-4 flex-col items-center">
            <div className="flex gap-10 flex-col items-center max-w-[700px]">
              <AttendanceTable
                title={LL.chairs.attendance.nations.TITLE()}
                description={LL.chairs.attendance.nations.DESCRIPTION()}
                delegationData={delegationData}
                updatePresence={updatePresence}
              />
              <AttendanceTable
                title={LL.chairs.attendance.nsa.TITLE()}
                description={LL.chairs.attendance.nsa.DESCRIPTION()}
                delegationData={nonStateActorsData}
                updatePresence={updatePresence}
              />
            </div>
          </div>
        </ScrollPanel>
      </div>
    </>
  );
}
