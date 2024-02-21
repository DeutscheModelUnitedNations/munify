import { backend } from "@/services/backend";
import react, { createContext, useContext, useEffect } from "react";
import { CommitteeIdContext, ConferenceIdContext } from "./committee_data";
import { useToast } from "./toast";
import { toastError } from "@/fetching/fetching_utils";
import { useI18nContext } from "@/i18n/i18n-react";

export const MessageCountContext = createContext(
  {} as {
    messageCount: number;
    setMessageCount: (count: number) => void;
  },
);

/**
 * This Component provides a context for the message count.
 * It is used to show the number of unread messages in the navbar.
 * The message count is fetched from the backend.
 * @param children
 */

export function MessageCountProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { LL } = useI18nContext();
  const conferenceId = useContext(ConferenceIdContext);
  const committeeId = useContext(CommitteeIdContext);
  const { showToast } = useToast();

  const [messageCount, setMessageCount] = react.useState(0);
  const [toastShown, setToastShown] = react.useState(false);

  async function getGlobalMessageCount() {
    backend.conference[conferenceId].messages.count
      .get()
      .then((res) => {
        if (res.status === 200) {
          const newCount = parseInt(res.data);
          if (newCount !== messageCount) {
            setToastShown(false);
          }
          // if (newCount > messageCount && !toastShown) {
          //   showToast({
          //     severity: "info",
          //     summary: LL.messageBoard.toast.NEW_MESSAGE_SUMMARY(),
          //     detail: LL.messageBoard.toast.NEW_MESSAGE_DETAIL(),
          //   });
          //   setToastShown(true);
          // }
          setMessageCount(newCount);
        }
      })
      .catch((err) => {
        toastError(err);
      });
  }

  async function getCommitteeMessageCount() {
    backend.conference[conferenceId].committee[committeeId].messages.count
      .get()
      .then((res) => {
        if (res.status === 200) {
          const newCount = parseInt(res.data);
          if (newCount < messageCount) {
            setToastShown(false);
          }
          // if (newCount > messageCount && !toastShown) {
          //   showToast({
          //     severity: "info",
          //     summary: LL.messageBoard.toast.NEW_MESSAGE_SUMMARY(),
          //     detail: LL.messageBoard.toast.NEW_MESSAGE_DETAIL(),
          //   });
          //   setToastShown(true);
          // }
          // setMessageCount(res.data);
        }
      })
      .catch((err) => {
        toastError(err);
      });
  }

  useEffect(() => {
    if (committeeId) {
      const intervalAPICall = setInterval(() => {
        if (committeeId) {
          getCommitteeMessageCount();
        } else {
          getGlobalMessageCount();
        }
      }, 15000);
      return () => clearInterval(intervalAPICall);
    }
  }, [committeeId]);

  return (
    <MessageCountContext.Provider value={{ messageCount, setMessageCount }}>
      {children}
    </MessageCountContext.Provider>
  );
}
