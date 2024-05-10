import React, { useState, useEffect } from "react";
import { useI18nContext } from "@/i18n/i18n-react";
import { useBackend } from "@/contexts/backend";
import useMousetrap from "mousetrap-react";
import { Dialog } from "primereact/dialog";
import SpeakersListWidget from "../speakers_list";
import { useSpeakersListMiniature } from "@/contexts/speakers_list_miniature";
import {
  faArrowUpRightFromSquare,
  faXmark,
} from "@fortawesome/pro-solid-svg-icons";
import Button from "@/components/button";
import { useRouter } from "next/navigation";

export default function SpeakersListMiniature() {
  const { LL, locale } = useI18nContext();
  const { backend } = useBackend();
  const router = useRouter();

  // Context
  const { showSpeakersListMiniature, toggleSpeakersListMiniature, setShowSpeakersListMiniature } =
    useSpeakersListMiniature();

  useMousetrap("o", (e) => {
    e.preventDefault();
    toggleSpeakersListMiniature();
  });

  return (
    <>
      <Dialog
        header="Header"
        position="bottom-right"
        content={
          <>
            <SpeakersListWidget />
            <div className="absolute top-0 right-0 p-4 flex gap-2">
              <Button text faIcon={faArrowUpRightFromSquare}
                onClick={() => {
                  router.push("./speakers");
                  setShowSpeakersListMiniature(false);
                }}
              />

              <Button
                text
                faIcon={faXmark}
                onClick={() => setShowSpeakersListMiniature(false)}
              />
            </div>
          </>
        }
        visible={showSpeakersListMiniature}
        modal={false}
        style={{ width: "50vw" }}
        onHide={() => setShowSpeakersListMiniature(false)}
      />
    </>
  );
}
