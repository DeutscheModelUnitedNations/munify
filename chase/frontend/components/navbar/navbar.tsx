"use client";
import React, { useState } from "react";
import Image from "next/image";

import NavButton from "@/components/navbar/button";
import SettingsSidebar from "@/components/navbar/settings_sidebar";

import { useRouter } from "next/navigation";
import { confirmDialog, ConfirmDialog } from "primereact/confirmdialog";

import {
  faRightFromBracket,
  faGear,
  faSquarePollVertical,
  faScroll,
  faComment,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

/**
 * This Component is used in the Layout Component.
 * It displays the navbar on the left side of the screen on all pages except the login page.
 * It contains buttons to navigate to other pages and a button to open the settings sidebar.
 */

export default function Navbar({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  // const { LL } = useI18nContext(); // TODO find a way to use this in the Navbar component (Layout.tsx)

  const [settingsSidebarVisible, setSettingsSidebarVisible] = useState(false);

  const acceptLogout = () => {
    // TODO: logout
    router.push("/login/participant");
  };

  const rejectLogout = () => {
    console.log("Logout rejected");
  };

  const confirmLogout = () => {
    confirmDialog({
      message: "Sind sie sicher, dass Sie sich abmelden möchten?",
      icon: "pi pi-exclamation-triangle",
      position: "bottom-left",
      acceptLabel: "Ja",
      acceptIcon: "pi pi-check",
      acceptClassName: "p-button-danger",
      rejectLabel: "Nein",
      rejectIcon: "pi pi-times",
      accept: acceptLogout,
      reject: rejectLogout,
    });
  };

  return (
    <>
      <div className="w-20 h-full bg-primary flex flex-col items-center gap-10">
        <Image
          src="/logo/png/chase_logo_white_transparent.png"
          alt="Logo"
          width={60}
          height={60}
          className="mt-3"
        />
        <div className="flex flex-col justify-center items-center gap-3">
          {children}
        </div>
        <div className="flex-1" />
        <div className="flex flex-col items-center gap-3 mb-5">
          <SettingsSidebar
            settingsSidebarVisible={settingsSidebarVisible}
            setSettingsSidebarVisible={setSettingsSidebarVisible}
          />
          <NavButton
            icon={faGear}
            onClick={() => setSettingsSidebarVisible(true)}
            title="Einstellungen"
          />
          <ConfirmDialog />
          <NavButton
            icon={faRightFromBracket}
            onClick={confirmLogout}
            title="Logout"
          />
        </div>
      </div>
    </>
  );
}
