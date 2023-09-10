"use client";

import Navbar from "@/components/navbar/navbar";
import NavButton from "@/components/navbar/button";
import {
  faPodium,
  faHouse,
  faScroll,
  faPollPeople,
  faNewspaper
} from "@fortawesome/pro-solid-svg-icons";
import { useI18nContext } from "@/i18n/i18n-react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function Participant_Pages_Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { LL } = useI18nContext();

  return (
    <div className="flex h-screen w-screen bg-white text-primary-100 dark:bg-primary-100 dark:text-primary-900 shadow-md overflow-hidden">
      <Navbar>
        <NavButton
          icon={faHouse as IconProp}
          link={"/participant/dashboard"}
          title={LL.navbar.DASHBOARD()}
        />
        <NavButton
          icon={faPodium as IconProp}
          link={"/participant/speakers"}
          title={LL.navbar.SPEAKERS()}
        />
        <NavButton
          icon={faPollPeople as IconProp}
          link={"/participant/voting"}
          title={LL.navbar.VOTING()}
        />
        <NavButton
          icon={faScroll as IconProp}
          link={"/participant/resolutions"}
          title={LL.navbar.RESOLUTIONS()}
        />
        <div className="h-5" />
        <NavButton
          icon={faNewspaper as IconProp}
          newWindow
          link="https://presse.mun-sh.de/" // TODO make this link configurable for the chair (Link to external News Page)
          title={LL.navbar.NEWS()}
        />
      </Navbar>
      {children}
    </div>
  );
}
