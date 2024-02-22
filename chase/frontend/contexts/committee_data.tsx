"use client";
import { backend } from "@/services/backend";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toastError } from "@/fetching/fetching_utils";

type Committee = Awaited<
  ReturnType<
    (typeof backend.conference)["conferenceId"]["committee"]["committeeId"]["get"]
  >
>["data"];

type AgendaItem = Awaited<
  ReturnType<
    (typeof backend.conference)["conferenceId"]["committee"]["committeeId"]["agendaItem"]["active"]["get"]
  >
>["data"];

export const ConferenceIdContext = createContext<string | null>(null);
export const CommitteeIdContext = createContext<string | null>(null);

export const CommitteeDataContext = createContext<Committee | null>(null);

export const CommitteeDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const conferenceId = useContext(ConferenceIdContext);
  const committeeId = useContext(CommitteeIdContext);

  const [committeeData, setCommitteeData] = useState<Committee | null>(null);

  async function getCommitteeData() {
    if (!conferenceId || !committeeId) return;
    await backend.conference[conferenceId].committee[committeeId]
      .get()
      .then((response) => {
        setCommitteeData(response.data);
      })
      .catch((error) => {
        toastError(error);
      });
  }

  useEffect(() => {
    getCommitteeData();
    const intervalAPICall = setInterval(() => {
      getCommitteeData();
    }, 5000);
    return () => clearInterval(intervalAPICall);
  }, [committeeId, conferenceId]);

  return (
    <CommitteeDataContext.Provider value={committeeData}>
      {children}
    </CommitteeDataContext.Provider>
  );
};

export const AgendaItemContext = createContext<AgendaItem | null>(null);

export const AgendaItemDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const conferenceId = useContext(ConferenceIdContext);
  const committeeId = useContext(CommitteeIdContext);

  const [agendaItem, setAgendaItem] = useState<AgendaItem | null>(null);

  async function getAgendaItem() {
    if (!conferenceId || !committeeId) return;
    await backend.conference[conferenceId].committee[
      committeeId
    ].agendaItem.active
      .get()
      .then((response) => {
        if (response.error?.status === 404) {
          setAgendaItem(null);
          return;
        }
        setAgendaItem(response.data);
      })
      .catch((error) => {
        toastError(error);
      });
  }

  useEffect(() => {
    getAgendaItem();
    const intervalAPICall = setInterval(() => {
      getAgendaItem();
    }, 5000);
    return () => clearInterval(intervalAPICall);
  }, []);

  return (
    <AgendaItemContext.Provider value={agendaItem}>
      {children}
    </AgendaItemContext.Provider>
  );
};
