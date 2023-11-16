import React, { useEffect, useRef, useState } from "react";
import { useI18nContext } from "@/i18n/i18n-react";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import Button from "@/components/button";
import {
  faAngleRight,
  faHandPointRight,
  faPlusCircle,
  faPodium,
  faTrashAlt,
  faXmark,
} from "@fortawesome/pro-solid-svg-icons";
import { AgendaItem } from "@/custom_types/fetching";
import { useBackend } from "@/contexts/backend";
import { Toast } from "primereact/toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AgendaItemProbs {
  agendaItems: AgendaItem[];
  conferenceId: string;
  committeeId: string;
  setUpdate: (update: boolean) => void;
}

export default function agendaItem({
  agendaItems,
  conferenceId,
  committeeId,
  setUpdate,
}: AgendaItemProbs) {
  const { LL } = useI18nContext();
  const backend = useBackend();
  const toast = useRef<Toast>(null);

  const [CommitteeAgendaItems, setCommitteeAgendaItems] = useState<
    AgendaItem[]
  >([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    setCommitteeAgendaItems(
      agendaItems.filter((item) => item.committeeId === committeeId)
    );
  }, [agendaItems]);

  async function addAgendaItem() {
    try {
      await backend.conference[conferenceId].committee[
        committeeId
      ].agendaItem.post({
        title: inputValue,
      });
      setUpdate(true);
    } catch (error) {
      toast.current?.show({
        severity: "error",
        summary: LL.admin.onboarding.error.title(),
        detail: LL.admin.onboarding.error.generic(),
      });
    }
  }

  async function deleteAgendaItem(agendaItemId: string) {
    try {
      await backend.conference[conferenceId].committee[committeeId].agendaItem[
        agendaItemId
      ].delete();
      setUpdate(true);
    } catch (error) {
      toast.current?.show({
        severity: "error",
        summary: LL.admin.onboarding.error.title(),
        detail: LL.admin.onboarding.error.generic(),
      });
    }
  }

  return (
    <>
      <Divider align="center" type="dashed" />
      <h1 className="font-bold text-lg mb-4">Agenda Items</h1>
      <li className="flex flex-col gap-2 mb-4">
        {CommitteeAgendaItems.map((item) => (
          <ul className="flex justify-between items-center bg-gray-100 rounded-md p-1">
            <div className="mx-4"><FontAwesomeIcon icon={faPodium} className="text-primary-500" /></div>
            <div className="flex-1 my-1">{item.title}</div>
            <Button
              faIcon={faTrashAlt}
              severity="danger"
              text
              onClick={() => deleteAgendaItem(item.id)}
              size="small"
            />
          </ul>
        ))}
      </li>
      <div className="flex gap-2">
        <InputText
          id="username"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="mt-3 flex-1"
        />
        <Button
          faIcon={faPlusCircle}
          label="Add Item"
          onClick={() => addAgendaItem()}
          disabled={inputValue === ""}
        />
      </div>
    </>
  );
}
