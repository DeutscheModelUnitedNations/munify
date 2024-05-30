"use client";
import { useState } from "react";
import InboxTemplate from "@/frontend/components/inbox/inbox_template";
import Button from "@/frontend/components/button";
import { ActionsOverlayResearchService } from "@/frontend/components/dashboard/actions_overlay";
import { useQuery } from "@/gqty";

export default function InboxPage() {
  const { findManyMessages } = useQuery();
  const [selectedMessageId, setSelectedMessageId] =
    useState<ReturnType<typeof findManyMessages>[number]["id"]>();
  const [displayResearchDialog, setDisplayResearchDialog] = useState(false);

  async () => {
    (await findManyMessages())[0].committee.id;
  };

  return (
    <>
      <ActionsOverlayResearchService
        showOverlay={displayResearchDialog}
        setShowOverlay={setDisplayResearchDialog}
        isChair
      />
      <InboxTemplate
        isResearchService={false}
        messages={findManyMessages()}
        selectedMessage={selectedMessageId}
        setSelectedMessage={setSelectedMessageId}
        getMessagesFunction={findManyMessages}
      />
      <div className="absolute bottom-5 right-5">
        <Button
          faIcon="plus"
          className="z-50"
          raised
          onClick={() => setDisplayResearchDialog(true)}
        />
      </div>
    </>
  );
}
