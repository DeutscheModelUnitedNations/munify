import {
  CommitteeStatus,
  CountryCode,
  NormalApiResponse,
  SpeakersListData,
  Document,
  Voting,
  Motion,
  Attendance,
} from "@/custom_types";

export const myCountry: CountryCode = "cpv";

export const ListOfAllCountries: CountryCode[] = [
  "afg",
  "alb",
  "dza",
  "and",
  "ago",
  "atg",
  "arg",
  "arm",
  "aus",
  "aut",
  "aze",
  "bhs",
  "bhr",
  "bgd",
  "brb",
  "blr",
  "bel",
  "blz",
  "ben",
  "btn",
  "bol",
  "bih",
  "bwa",
  "bra",
  "brn",
  "bgr",
  "bfa",
  "bdi",
  "khm",
  "cmr",
  "can",
  "cpv",
  "caf",
  "tcd",
  "chl",
  "chn",
  "col",
  "com",
  "cog",
  "cod",
  "cri",
  "civ",
  "hrv",
  "cub",
  "cyp",
  "cze",
  "dnk",
  "dji",
  "dma",
  "dom",
  "ecu",
  "egy",
  "slv",
  "gnq",
  "eri",
  "est",
  "eth",
  "fji",
  "fin",
  "fra",
  "gab",
  "gmb",
  "geo",
  "deu",
  "gha",
  "grc",
  "grd",
  "gtm",
  "gin",
  "gnb",
  "guy",
  "hti",
  "hnd",
  "hun",
  "isl",
  "ind",
  "idn",
  "irn",
  "irq",
  "irl",
  "isr",
  "ita",
  "jam",
  "jpn",
  "jor",
  "kaz",
  "ken",
  "kir",
  "prk",
  "kor",
  "kwt",
  "kgz",
  "lao",
  "lva",
  "lbn",
  "lso",
  "lbr",
  "lby",
  "lie",
  "ltu",
  "lux",
  "mkd",
  "mdg",
  "mwi",
  "mys",
  "mdv",
  "mli",
  "mlt",
  "mhl",
  "mrt",
  "mus",
  "mex",
  "fsm",
  "mar",
  "mda",
  "mco",
  "mng",
  "mne",
  "moz",
  "mmr",
  "nam",
  "nru",
  "npl",
  "nld",
  "nzl",
  "nic",
  "ner",
  "nga",
  "nor",
  "omn",
  "pak",
  "plw",
  "pan",
  "png",
  "pry",
  "per",
  "phl",
  "pol",
  "prt",
  "qat",
  "rou",
  "rus",
  "rwa",
  "kna",
  "lca",
  "vct",
  "wsm",
  "smr",
  "stp",
  "sau",
  "sen",
  "srb",
  "syc",
  "sle",
  "sgp",
  "svk",
  "svn",
  "slb",
  "som",
  "zaf",
  "ssd",
  "esp",
  "lka",
  "sdn",
  "sur",
  "swz",
  "swe",
  "che",
  "syr",
  "tjk",
  "tza",
  "tha",
  "tls",
  "tgo",
  "ton",
  "tto",
  "tun",
  "tur",
  "tkm",
  "tuv",
  "uga",
  "ukr",
  "are",
  "gbr",
  "usa",
  "ury",
  "uzb",
  "vut",
  "ven",
  "vnm",
  "yem",
  "zmb",
  "zwe",
  "unm",
  "unw",
  "gsm",
  "gsw",
];

export const speakersListTestData: SpeakersListData = {
  listOfAllCountries: ListOfAllCountries,
  currentSpeaker: {
    entryId: "1",
    countryCode: "unw",
    timer: {
      start: new Date(),
      durationMilliseconds: 1000 * 60 * 3,
      paused: true,
    },
  },
  list: [
    {
      entryId: "2",
      countryCode: "deu",
    },
    {
      entryId: "3",
      countryCode: "usa",
    },
    {
      entryId: "4",
      countryCode: "yem",
    },
    {
      entryId: "5",
      countryCode: "fra",
    },
    {
      entryId: "6",
      countryCode: "gbr",
    },
    {
      entryId: "7",
      countryCode: "jam",
    },
    {
      entryId: "8",
      countryCode: "cpv",
    },
    {
      entryId: "9",
      countryCode: "gmb",
    },
    {
      entryId: "10",
      countryCode: "jor",
    },
    {
      entryId: "11",
      countryCode: "lao",
    },
    {
      entryId: "12",
      countryCode: "ltu",
    },
    {
      entryId: "13",
      countryCode: "fsm",
    },
    {
      entryId: "14",
      countryCode: "omn",
    },
  ],
  closed: false,
};

export const commentListTestData: SpeakersListData = {
  listOfAllCountries: ListOfAllCountries,
  currentSpeaker: {
    entryId: "1",
    countryCode: "cpv",
    timer: {
      start: new Date(),
      durationMilliseconds: 1000 * 20, // 20 test seconds
      paused: false,
    },
  },
  list: [
    {
      entryId: "3",
      countryCode: "usa",
    },
    {
      entryId: "4",
      countryCode: "yem",
    },
    {
      entryId: "5",
      countryCode: "fra",
    },
  ],
  closed: true,
};

export const committeeStatusTestData: CommitteeStatus = {
  status: "Informelle Sitzung",
  until: new Date(Date.now() + 1000 * 30),
  category: "informal",
  currentDebateStep: "Allgemeine Debatte",
  nextDebateStep: "Debatte zum Resolutionsentwurf RE/GV/23/1",
};

export const documentsTestData: Document[] = [
  {
    documentId: "RES/GV/23/1",
    topic: "Resolution zur Einführung einer neuen Chairsoftware",
    category: "adopted",
    introducedBy: "deu",
    sponsors: ["gbr", "fra", "usa"],
  },
  {
    documentId: "RE/GV/23/2/1",
    category: "draft",
    introducedBy: "jam",
    sponsors: ["gbr", "fra", "usa"],
  },
  {
    documentId: "RE/GV/23/2/2",
    category: "draft",
    introducedBy: "usa",
    sponsors: ["gbr", "deu"],
  },
  {
    documentId: "AP/1",
    category: "paper",
    introducedBy: "gbr",
    shared: true,
    sponsors: ["gbr"],
  },
  {
    documentId: "AP/5",
    shared: false,
    category: "paper",
    introducedBy: "jam",
  },
];

export const whiteboardTestData: string =
  '<h1>Hello World!</h1><p>Hier ist ein Beispiel für einen Whiteboardtext.</p><p><br></p><h2>Vorsitzende</h2><ul><li>Miriam Güthe</li><li>Maximilian Ilzhöfer</li><li>Tade Strehk</li></ul><p><br></p><h2>Gremienberatung</h2><ul><li>Felix Thomsen</li></ul><p><br></p><p>Und hier ein <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(0, 123, 255);">Link</a>.</p><p><br></p><blockquote>An alle Terrorteilis:&nbsp;<code style="background-color: rgb(240, 240, 240);">Das Pöbeln nicht vergessen!</code></blockquote><p><br></p><h2>Über diesen Block</h2><p>Hier können die Vorsitzenden aktuelle Informationen anzeigen. Das ganze wird über einen Editor funktionieren, sodass die Vorsitzenden über Markdown ihre Informationen individuell verpacken und anzeigen können. Das bietet größtmögliche Flexibilität und Übersichtlichkeit.</p><p><br></p>';

export const apiTestData: NormalApiResponse = {
  committeeName: "Generalversammlung",
  currentTopic: "Rechte von Kindersoldaten",
  myCountry: myCountry,

  speakersList: speakersListTestData,
  commentList: commentListTestData,

  committeeStatus: committeeStatusTestData,

  documents: documentsTestData,
};

export const votingTestData1: Voting = {
  motionId: "1",
  title: "Abstimmung über den Resolutionsentwurf RE/GV/23/1",
  description:
    "Sollte der Antrag angenommen werden, wird das Gremium in eine informelle Sitzung übergehen, die 15 Minuten dauern wird.",
  introducedBy: "uno",
  substantiveVote: true,
  votingCountries: [
    "cpv",
    "deu",
    "fra",
    "chn",
    "rus",
    "usa",
    "gbr",
    "jpn",
    "cmr",
    "alb",
    "arm",
    "aut",
    "bhr",
  ],
  majority: "simple",
  votes: [
    {
      country: "cpv",
      vote: "yes",
    },
    {
      country: "deu",
      vote: "no",
    },
    {
      country: "fra",
      vote: "yes",
    },
    {
      country: "chn",
      vote: "no",
    },
    {
      country: "rus",
      vote: "yes",
    },
    {
      country: "usa",
      vote: "yes",
    },
    {
      country: "gbr",
      vote: "yes",
    },
    {
      country: "jpn",
      vote: "yes",
    },
    {
      country: "alb",
      vote: "abstain",
    },
    {
      country: "cmr",
      vote: "yes",
    },
    {
      country: "arm",
      vote: "yes",
    },
    {
      country: "aut",
      vote: "yes",
    },
    // {
    //   country: "cpv",
    //   vote: "yes",
    // },
  ],
  outcome: "passed",
};

export const votingTestData2: Voting = {
  motionId: "2",
  title:
    "Antrag auf vorgezogene Abstimmung über den Resolutionsentwurf als Ganzen",
  description:
    "Wenn dieser Antrag angenommen wird, wird über den Resolutionsentwurf als Ganzen abgestimmt. Dies bedeutet, dass die einzelnen operativen Absätze des Resolutionsentwurfs nicht mehr einzeln abgestimmt werden. Sollte der Resolutionsentwurf in der folgenden Abstimmung nicht angenommen werden, wird mit der Behandlung des nächsten Resolutionsentwurfs fortgefahren.",
  introducedBy: "deu",
  substantiveVote: false,

  votingCountries: [
    "afg",
    "alb",
    "dza",
    "and",
    "ago",
    "atg",
    "arg",
    "arm",
    "aus",
    "aut",
    "aze",
    "bhs",
    "bhr",
    "bgd",
    "brb",
    "blr",
    "bel",
    "blz",
    "ben",
    "btn",
    "bol",
    "bih",
    "bwa",
    "bra",
    "brn",
    "bgr",
    "bfa",
    "bdi",
    "khm",
    "cmr",
    "can",
    "cpv",
    "caf",
    "tcd",
    "chl",
    "chn",
    "col",
    "com",
    "cog",
    "cod",
    "cri",
    "civ",
    "hrv",
    "cub",
    "cyp",
    "cze",
    "dnk",
    "dji",
    "dma",
    "dom",
    "ecu",
    "egy",
    "slv",
    "gnq",
    "eri",
    "est",
    "eth",
    "fji",
    "fin",
    "fra",
    "gab",
    "gmb",
    "geo",
    "deu",
    "gha",
    "grc",
    "grd",
    "gtm",
    "gin",
    "gnb",
    "guy",
    "hti",
    "hnd",
    "hun",
    "isl",
    "ind",
    "idn",
    "irn",
    "irq",
    "irl",
    "isr",
    "ita",
    "jam",
    "jpn",
    "jor",
    "kaz",
    "ken",
    "kir",
    "prk",
    "kor",
    "kwt",
    "kgz",
    "lao",
    "lva",
    "lbn",
    "lso",
    "lbr",
    "lby",
    "lie",
    "ltu",
    "lux",
    "mkd",
    "mdg",
    "mwi",
    "mys",
    "mdv",
    "mli",
    "mlt",
    "mhl",
    "mrt",
    "mus",
    "mex",
    "fsm",
    "mar",
    "mda",
    "mco",
    "mng",
    "mne",
    "moz",
    "mmr",
    "nam",
    "nru",
    "npl",
    "nld",
    "nzl",
    "nic",
    "ner",
    "nga",
    "nor",
    "omn",
    "pak",
    "plw",
    "pan",
    "png",
    "pry",
    "per",
    "phl",
    "pol",
    "prt",
    "qat",
    "rou",
    "rus",
    "rwa",
    "kna",
    "lca",
    "vct",
    "wsm",
    "smr",
    "stp",
    "sau",
    "sen",
    "srb",
    "syc",
    "sle",
    "sgp",
    "svk",
    "svn",
    "slb",
    "som",
    "zaf",
    "ssd",
    "esp",
    "lka",
    "sdn",
    "sur",
    "swz",
    "swe",
    "che",
    "syr",
    "tjk",
    "tza",
    "tha",
    "tls",
    "tgo",
    "ton",
    "tto",
    "tun",
    "tur",
    "tkm",
    "tuv",
    "uga",
    "ukr",
    "are",
    "gbr",
    "usa",
    "ury",
    "uzb",
    "vut",
    "ven",
    "vnm",
    "yem",
    "zmb",
    "zwe",
  ],
  majority: "two-thirds",
  votes: [
    {
      country: "deu",
      vote: "yes",
    },
    {
      country: "fra",
      vote: "no",
    },
    {
      country: "chn",
      vote: "yes",
    },
    {
      country: "rus",
      vote: "yes",
    },
    {
      country: "usa",
      vote: "yes",
    },
    {
      country: "gbr",
      vote: "yes",
    },
    {
      country: "jpn",
      vote: "yes",
    },
    {
      country: "cmr",
      vote: "yes",
    },
    {
      country: "alb",
      vote: "yes",
    },
    {
      country: "dza",
      vote: "yes",
    },
    {
      country: "ago",
      vote: "yes",
    },
    {
      country: "atg",
      vote: "yes",
    },
    {
      country: "arg",
      vote: "yes",
    },
    {
      country: "arm",
      vote: "no",
    },
    {
      country: "aus",
      vote: "no",
    },
    {
      country: "aut",
      vote: "no",
    },
    {
      country: "aze",
      vote: "no",
    },
    {
      country: "bhs",
      vote: "no",
    },
    {
      country: "bhr",
      vote: "no",
    },
    {
      country: "bgd",
      vote: "no",
    },
    {
      country: "cpv",
      vote: "no",
    },
  ],
  // outcome: "failed",
};

export const votingTestData3: Voting = {
  motionId: "3",
  title: "Antrag auf vorgezogene Abstimmung über den Resolutionsentwurf",
  description:
    "Wenn dieser Antrag angenommen wird, wird über den Resolutionsentwurf als Ganzen abgestimmt. Dies bedeutet, dass die einzelnen operativen Absätze des Resolutionsentwurfs nicht mehr einzeln abgestimmt werden. Sollte der Resolutionsentwurf in der folgenden Abstimmung nicht angenommen werden, wird mit der Behandlung des nächsten Resolutionsentwurfs fortgefahren.",
  introducedBy: "cpv",
  substantiveVote: false,
  votingCountries: [
    "cpv",
    "deu",
    "fra",
    "chn",
    "rus",
    "usa",
    "gbr",
    "jpn",
    "cmr",
    "alb",
    "arm",
    "aut",
    "bhr",
  ],
  majority: "two-thirds",
  votes: [
    // {
    //   country: "cpv",
    //   vote: "yes",
    // },
    {
      country: "deu",
      vote: "yes",
    },
    {
      country: "fra",
      vote: "no",
    },
    {
      country: "chn",
      vote: "no",
    },
    {
      country: "rus",
      vote: "no",
    },
    {
      country: "usa",
      vote: "no",
    },
    {
      country: "gbr",
      vote: "no",
    },
    {
      country: "jpn",
      vote: "no",
    },
  ],
  outcome: "failed",
};

export const motionTestData: Motion[] = [
  {
    motionId: "1",
    introducedBy: "deu",
    motionText: "Vorgezogene Abstimmung über den Resolutionsentwurf als Ganzen",
    status: "in-voting",
    voting: votingTestData2,
  },
  {
    motionId: "0",
    introducedBy: "cpv",
    motionText: "Schließung der Redeliste",
    status: "open",
  },
  {
    motionId: "2",
    introducedBy: "uno",
    motionText: "Abstimmung über den Resolutionsentwurf RE/GV/23/1",
    status: "passed",
    voting: votingTestData1,
  },
  {
    motionId: "4",
    introducedBy: "fra",
    motionText: "Eröffnung der Redeliste",
    status: "passed",
  },
  {
    motionId: "3",
    introducedBy: "cpv",
    motionText: "Abschluss der Redeliste",
    status: "failed",
    voting: votingTestData3,
  },
];

export const attendanceTestData: Attendance[] = [
  {
    country: "usa",
    present: "present",
  },
  {
    country: "fra",
    present: "present",
  },
  {
    country: "deu",
    present: "present",
  },
  {
    country: "gbr",
    present: "absent",
  },
  {
    country: "rus",
    present: "absent",
  },
  {
    country: "chn",
    present: "absent",
  },
  {
    country: "jpn",
    present: "excused",
  },
  {
    country: "kor",
    present: "present",
  },
  {
    country: "ita",
    present: "present",
  },
  {
    country: "esp",
    present: "present",
  },
  {
    country: "can",
    present: "excused",
  },
  {
    country: "mex",
    present: "present",
  },
];
