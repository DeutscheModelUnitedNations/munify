import type { Translation } from "../i18n-types";

const de = {
  LOADING_PAGE: "Loading...",

  login: {
    USERNAME_PLACEHOLDER: "Username",
    PASSWORD_PLACEHOLDER: "Passwort",
    ADVANCE_BUTTON: "Weiter",
    BACK_BUTTON: "Zurück",
    LOGIN_BUTTON: "Anmelden",
    legalNotice: {
      SECTION_1: "Ich bin Einverstanden mit den ",
      TERMS_LINK: "Nutzungsbedingungen",
      SECTION_2: ". Außerdem bin ich damit einverstanden, dass diese Website Cookies verwendet. Mehr Informationen dazu finden Sie in unseren ",
      PRIVACY_LINK: "Datenschutzbestimmungen",
      SECTION_3: ".",
    },
    participant: {
      OTHER_SIGH_IN: "Stattdessen als Vorsitz anmelden",
      COMMITTEE_LABEL: "Gremium",
      COUNTRY_LABLE: "Staat / NA",      
      committeeSelection: {
        HEADLINE: "Gremium auswählen",
      },
    },
    chair: {
      OTHER_SIGN_IN: "Stattdessen als Teilnehmer anmelden",
      WARNING_MESSAGE: "Sie sind im Begriff sich als Vorsitz anzumelden."
    },
  },

  participants: {
    dashboard: {
      widgetHeadlines: {
        SPEAKERS_LIST: "Redeliste",
        COMMENT_LIST: "Fragen und Kurzbemerkungen",
        COMMITTEE_STATUS: "Debattenstatus",
        WHITEBOARD: "Whiteboard",
        DOCUMENTS: "Dokumente",
        ACTIONS: "Anfrage senden",
      },
      timerWidget: {
        UNTIL_1: "bis",
        UNTIL_2: "Uhr",
        TOAST_HEADLINE: "Zeit ist abgelaufen!",
        TOAST_MESSAGE: "Gehe zurück in die formelle Debatte.",
      },
      actionsWidget: {
        CHAIR_BUTTON: "Vorsitz",
        RESEARCH_SERVICE_BUTTON: "Wiss. Dienst",
        contactForm: {
          HEADLINE_CHAIR: "Sende dem Vorsitz eine Nachricht",
          HEADLINE_RESEARCH_SERVICE: "Sende dem Wissenschaftlichen Dienst (WD) eine Nachricht",
          SUBJECT_PLACEHOLDER: "Betreff",
          MESSAGE_PLACEHOLDER: "Nachricht",
          CATEGORY_LABEL: "Kategorie",
          CATEGORY_PLACEHOLDER: "Wähle eine Kategorie aus",
          CANCEL_BUTTON: "Abbrechen",
          SEND_BUTTON: "Senden",
          INFO_MESSAGE: "Diese Anfrage wird zunächst vom Vorsitz geprüft und erst dann an den Wissenschaftlichen Dienst weitergeleitet.",
          categoryOptions: {
            GUEST_SPEAKER: "Gastredner:in anfragen",
            FACT_CHECK: "Faktencheck",
            INFORMATION: "Informationsanfrage",
            GENERAL_SECRETARY: "Um Besuch des/der Generalsekretär:in bitten",
            OTHER: "Sonstiges",
          },
        },
      },
      documentsWidget: {
        SPONSORS: "signierte Unterstützer:innen",
      },
    },

    speakersList: {
      SPEAKERS_LIST: "Redeliste",
      COMMENT_LIST: "Fragen und Kurzbemerkungen",
      ADD_TO_LIST_BUTTON: "Redebeitrag",
      REMOVE_FROM_LIST_BUTTON: "Zurückziehen",
      LIST_CLOSED_BUTTON: "Liste Geschlossen",
      LIST_CLOSED_MESSAGE: "Liste Geschlossen",
      NO_SPEAKERS_MESSAGE: "Keine Redner:innen auf der Liste",
    },

    voting: {
      MOTIONS_HEADLINE: "Anträge",
      NO_DATA_MOTIONS: "Keine offenen Anträge",
      VOTING_HEADLINE: "Abstimmungen",
      NO_DATA_VOTING: "Keine offenen Abstimmungen",
      votingInfo: {
        INTRODUCED_BY: "Eingebraucht von",
        votingMode: {
          SUBSTANTIAL_VOTING: "Inhaltliche Abstimmung – Enthaltung möglich",
          PROCEDURAL_VOTING: "Prozessuale Abstimmung – keine Enthaltung möglich",
        },
        majorityMode: {
          SIMPLE: "Einfache Mehrheit erforderlich (50% + 1)",
          TWO_THIRDS: "Zwei-Drittel Mehrheit erforderlich (2/3)",
          THREE_QUARTERS: "Drei-Viertel Mehrheit erforderlich (3/4)",
          CONSENSUS: "Konsens erforderlich",
          SECURITY_COUNCIL: "Abstimmungsmodus des Sicherheitsrats (9/15 + no veto)",
        },
      },
      votingButtons: {
        IN_FAVOUR: "Dafür",
        AGAINST: "Dagegen",
        ABSTENTION: "Enthaltung",

        REMAINING: "Verbleibend",

        VOTE_REGISTERED: "Stimme registriert",
        VOTE_REGISTERED_MESSAGE: "Warten auf Ergebnis",
      },
      votingResults: {
        VOTING_SUCCESSFUL: "Abstimung Erfolgreich",
        VOTING_FAILED: "Abstimmung Fehlgeschlagen",
      },
      votingAlert: {
        VOTING_ALERT_HEADLINE: "Neue Abstimmung gestartet",
        VOTING_ALERT_MESSAGE: "Bitte stimmen Sie so bald wie möglich ab.",
        BUTTON_ADVANCE: "Zur Abstimmung",
        BUTTON_IGNORE: "Ignorieren",
      }
    }
  }
} satisfies Translation;

export default de;
