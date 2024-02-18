"use client";
import React, { useState, useEffect, useRef } from "react";
import { useI18nContext } from "@/i18n/i18n-react";
import PresenceWidget from "@/components/attendance/presence_widget";
import TimerWidget from "@/components/dashboard/timer";
import SpeakersListBlock from "@/components/speakers_list/speakers_list_block";
import WidgetTemplate from "@/components/widget_template";
import { toastError } from "@/fetching/fetching_utils";
import { backend } from "@/services/backend";
import { Toast } from "primereact/toast";
import { apiTestData } from "@/test_data";
import { Committee } from "../../../../../../../backend/prisma/generated/schema";
import { Skeleton } from "primereact/skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPodium } from "@fortawesome/pro-solid-svg-icons";

type Committee = Awaited<ReturnType<typeof backend.conference["conferenceId"]["committee"]["committeeId"]["get"]>>["data"];
type AgendaItems = Awaited<ReturnType<typeof backend.conference["conferenceId"]["committee"]["committeeId"]["agendaItem"]["get"]>>["data"];


export default function CommitteePresentationMode({
  params,
}: {
  params: { conferenceId: string; committeeId: string };
}) {
  const { LL, locale } = useI18nContext();

  const [committeeData, setCommitteeData] = useState<Committee | null>(null);
  const [agendaItem, setAgendaItem] = useState<AgendaItems | null>(null);

  const toast = useRef(null);

  async function getCommitteeData() {
    await backend.conference[params.conferenceId].committee[params.committeeId]
      .get()
      .then((response) => {
        setCommitteeData(response.data);
      })
      .catch((error) => {
        toastError(toast, LL, error);
      });
  }

  async function getAgendaItems() {
    await backend.conference[params.conferenceId].committee[params.committeeId].agendaItem
      .get()
      .then((response) => {
        console.log(response.data);
        setAgendaItem(response.data);
      })
      .catch((error) => {
        toastError(toast, LL, error);
      });
  }

  useEffect(() => {
    getCommitteeData();
    getAgendaItems();
    const intervalAPICall = setInterval(() => {
      getCommitteeData();
      getAgendaItems();
    }, 5000);
    return () => clearInterval(intervalAPICall);
  }, []);


  return (
    <div className="bg-primary-900 p-4 h-screen">
      <Toast ref={toast} />
      <div className="flex gap-4">
        <div className="flex-1 flex flex-col gap-4 h-[calc(100vh-2rem)]">
          <WidgetTemplate>
            <h1 className="text-2xl font-bold">
              {committeeData?.name ?? <Skeleton width="5rem" height="2rem"></Skeleton>}
            </h1>
            <div className="flex gap-2 items-center mt-2">
              <FontAwesomeIcon className="mx-2" icon={faPodium} />
              <h2 className="text-lg">
                {agendaItem?.find((item) => item.isActive)?.title ?? <Skeleton width="5rem" height="1.75rem"></Skeleton>}
              </h2>
            </div>
          </WidgetTemplate>
          <WidgetTemplate
            cardTitle={LL.participants.dashboard.widgetHeadlines.PRESENCE()}
          >
            <PresenceWidget
              conferenceId={params.conferenceId}
              committeeId={params.committeeId}
            />
          </WidgetTemplate>
          <TimerWidget
            conferenceId={params.conferenceId}
            committeeId={params.committeeId}
            noAlert={true}
          />
        </div>
        <div className="flex-1 flex justify-center h-[calc(100vh-2rem)]">
          <SpeakersListBlock
            listTitle={LL.participants.speakersList.SPEAKERS_LIST()}
            speakersData={apiTestData.speakersList}
          />
        </div>
        <div className="flex-1 flex justify-center h-[calc(100vh-2rem)]">
          <SpeakersListBlock
            listTitle={LL.participants.speakersList.COMMENT_LIST()}
            speakersData={apiTestData.commentList}
          />
        </div>
      </div>
    </div >
  );
}