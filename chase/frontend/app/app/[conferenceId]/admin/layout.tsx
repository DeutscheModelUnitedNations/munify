"use client";
import { useEffect, useState, useContext } from "react";
import Navbar from "@/components/navbar/navbar";
import NavButton from "@/components/navbar/button";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faChalkboard,
  faPodium,
  faUsersLine,
  faSquareSliders,
  faNewspaper,
  faCommentExclamation,
  faInbox,
  faChartNetwork,
  faFlag,
  faGears,
  faMegaphone,
  faTableTree,
  faUsers,
} from "@fortawesome/pro-solid-svg-icons";
import Button from "@/components/button";
import SettingsSidebar from "@/components/navbar/settings_sidebar";
import { useI18nContext } from "@/i18n/i18n-react";
import { useRouter } from "next/navigation";
import useMousetrap from "mousetrap-react";
import { confirmPopup } from "primereact/confirmpopup";
import { ScrollPanel } from "primereact/scrollpanel";
import { useBackend } from "@/contexts/backend";
import { ConferenceIdContext } from "@/contexts/committee_data";
import Lockout from "@/components/lockout";
import { $Enums } from "@prisma/generated/client";
import { useToast } from "@/contexts/toast";

export default function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { conferenceId: string };
}) {
  const { LL } = useI18nContext();
  const { toastError } = useToast();
  const router = useRouter();
  const conferenceId = useContext(ConferenceIdContext);
  const { backend } = useBackend();

  const [settingsSidebarVisible, setSettingsSidebarVisible] = useState(false);

  const saveAndQuit = (e: React.MouseEvent<HTMLButtonElement>) => {
    confirmPopup({
      target: e.currentTarget,
      message: LL.admin.onboarding.SAVE_AND_QUIT_MESSAGE(),
      accept: () => {
        router.push(`/app/${params.conferenceId}/hub/team/committees`);
      },
    });
  };

  useMousetrap("ctrl+shift+s", () =>
    router.push(`/app/${params.conferenceId}/hub/team/committees`),
  );

  useEffect(() => {
    if (!conferenceId) return;
    backend.conference[conferenceId]
      .get()
      .then((response) => {
        if (!response?.data?.id) {
          router.push("/login/lockout");
        }
      })
      .catch((error) => {
        toastError(error);
        router.push("/login/lockout");
      });
  }, []);

  return (
    <>
      <Lockout whitelist={[$Enums.ConferenceRole.ADMIN]} />
      <div className="flex h-screen w-screen bg-white text-primary-100 dark:bg-primary-100 dark:text-primary-900 shadow-md overflow-hidden">
        <AdminNavbar />
        <ScrollPanel style={{ width: "calc(100% - 4rem)", height: "100%" }}>
          <div className="p-6">{children}</div>
        </ScrollPanel>
      </div>
    </>
  );
}

function AdminNavbar() {
  const { LL } = useI18nContext();

  return (
    <Navbar>
      <NavButton
        icon={faChartNetwork as IconProp}
        link="../hub/team/committees"
        title={LL.navbar.HUB()}
      />
      <div className="h-4" />
      <NavButton
        icon={faTableTree as IconProp}
        link={"./structure"}
        title={LL.admin.onboarding.steps.STEP_1()}
      />
      <NavButton
        icon={faUsers as IconProp}
        link={"./teampool"}
        title={LL.admin.onboarding.steps.STEP_2()}
      />
      <NavButton
        icon={faPodium as IconProp}
        link={"./committees"}
        title={LL.admin.onboarding.steps.STEP_3()}
      />
      <NavButton
        icon={faFlag as IconProp}
        link={"./delegations"}
        title={LL.admin.onboarding.steps.STEP_4()}
      />
      <NavButton
        icon={faMegaphone as IconProp}
        link={"./non_state_actors"}
        title={LL.admin.onboarding.steps.STEP_5()}
      />
      <NavButton
        icon={faGears as IconProp}
        link={"./configs"}
        title={LL.admin.onboarding.steps.STEP_6()}
      />
      <div className="flex-1" />
    </Navbar>
  );
}
