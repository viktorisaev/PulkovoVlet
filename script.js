const row = document.getElementById("row");
const countDisplay = document.getElementById("count");
const pastRow = document.getElementById("past-row");
const futureRow = document.getElementById("future-row");

const fallbackFlights = [
  {
    name: "Bobruysk",
    status: "delayed",
    planned: "2026-08-20T09:00:00.000",
    estimated: "2026-08-20T15:55:00.000",
  },
  {
    TimeStamp: "2026-08-20T15:00:00.000",

    name: "Nizhnekamsk",
    status: "departured",
    planned: "2026-08-20T10:00:00.000",
    estimated: "2026-08-20T10:00:00.000",
    actual: "2026-08-20T10:00:00.000",
  },

  //delay1
  {
    name: "Chelyabinsk",
    status: "departured",
    planned: "2026-08-20T10:30:00.000",
    estimated: "2026-08-20T10:30:00.000",
    actual: "2026-08-20T10:30:00.000",
  },
  { name: "Bobruysk", status: "cancelled", planned: "2026-08-20T11:00:00.000" },

  {
    name: "Nizhnekamsk",
    status: "delayed",
    planned: "2026-08-20T11:15:00.000",
    estimated: "2026-08-20T16:15:00.000", // --> 2
  },

  { name: "Bobruysk", status: "cancelled", planned: "2026-08-20T12:00:00.000" },

  {
    name: "Syktyvkar",
    status: "departured",
    planned: "2026-08-20T15:05:00.000",
    estimated: "2026-08-20T15:05:00.000",
    actual: "2026-08-20T14:55:00.000",
  },
  {
    name: "Bobruysk",
    status: "delayed",
    planned: "2026-08-20T09:00:00.000",
    estimated: "2026-08-20T15:55:00.000",
  },
  {
    name: "Nizhnekamsk",
    status: "departured",
    planned: "2026-08-20T10:00:00.000",
    estimated: "2026-08-20T10:00:00.000",
    actual: "2026-08-20T10:00:00.000",
  },

  //delay1
  {
    name: "Chelyabinsk",
    status: "departured",
    planned: "2026-08-20T10:30:00.000",
    estimated: "2026-08-20T10:30:00.000",
    actual: "2026-08-20T10:30:00.000",
  },
  { name: "Bobruysk", status: "cancelled", planned: "2026-08-20T11:00:00.000" },

  {
    name: "Nizhnekamsk",
    status: "delayed",
    planned: "2026-08-20T11:15:00.000",
    estimated: "2026-08-20T16:15:00.000", // --> 2
  },

  { name: "Bobruysk", status: "cancelled", planned: "2026-08-20T12:00:00.000" },

  {
    name: "Syktyvkar",
    status: "departured",
    planned: "2026-08-20T15:05:00.000",
    estimated: "2026-08-20T15:05:00.000",
    actual: "2026-08-20T14:55:00.000",
  },
  {
    name: "Bobruysk",
    status: "delayed",
    planned: "2026-08-20T09:00:00.000",
    estimated: "2026-08-20T15:55:00.000",
  },
  {
    name: "Nizhnekamsk",
    status: "departured",
    planned: "2026-08-20T10:00:00.000",
    estimated: "2026-08-20T10:00:00.000",
    actual: "2026-08-20T10:00:00.000",
  },

  //delay1
  {
    name: "Chelyabinsk",
    status: "departured",
    planned: "2026-08-20T10:30:00.000",
    estimated: "2026-08-20T10:30:00.000",
    actual: "2026-08-20T10:30:00.000",
  },
  { name: "Bobruysk", status: "cancelled", planned: "2026-08-20T11:00:00.000" },

  {
    name: "Nizhnekamsk",
    status: "delayed",
    planned: "2026-08-20T11:15:00.000",
    estimated: "2026-08-20T16:15:00.000", // --> 2
  },

  { name: "Bobruysk", status: "cancelled", planned: "2026-08-20T12:00:00.000" },

  {
    name: "Syktyvkar",
    status: "departured",
    planned: "2026-08-20T15:05:00.000",
    estimated: "2026-08-20T15:05:00.000",
    actual: "2026-08-20T14:55:00.000",
  },
  {
    name: "Bobruysk",
    status: "delayed",
    planned: "2026-08-20T09:00:00.000",
    estimated: "2026-08-20T15:55:00.000",
  },
  {
    name: "Nizhnekamsk",
    status: "departured",
    planned: "2026-08-20T10:00:00.000",
    estimated: "2026-08-20T10:00:00.000",
    actual: "2026-08-20T10:00:00.000",
  },

  //delay1
  {
    name: "Chelyabinsk",
    status: "departured",
    planned: "2026-08-20T10:30:00.000",
    estimated: "2026-08-20T10:30:00.000",
    actual: "2026-08-20T10:30:00.000",
  },
  { name: "Bobruysk", status: "cancelled", planned: "2026-08-20T11:00:00.000" },

  {
    name: "Nizhnekamsk",
    status: "delayed",
    planned: "2026-08-20T11:15:00.000",
    estimated: "2026-08-20T16:15:00.000", // --> 2
  },

  { name: "Bobruysk", status: "cancelled", planned: "2026-08-20T12:00:00.000" },

  {
    name: "Syktyvkar",
    status: "departured",
    planned: "2026-08-20T15:05:00.000",
    estimated: "2026-08-20T15:05:00.000",
    actual: "2026-08-20T14:55:00.000",
  },
  {
    name: "Bobruysk",
    status: "delayed",
    planned: "2026-08-20T09:00:00.000",
    estimated: "2026-08-20T15:55:00.000",
  },
  {
    name: "Nizhnekamsk",
    status: "departured",
    planned: "2026-08-20T10:00:00.000",
    estimated: "2026-08-20T10:00:00.000",
    actual: "2026-08-20T10:00:00.000",
  },

  //delay1
  {
    name: "Chelyabinsk",
    status: "departured",
    planned: "2026-08-20T10:30:00.000",
    estimated: "2026-08-20T10:30:00.000",
    actual: "2026-08-20T10:30:00.000",
  },
  { name: "Bobruysk", status: "cancelled", planned: "2026-08-20T11:00:00.000" },

  {
    name: "Nizhnekamsk",
    status: "delayed",
    planned: "2026-08-20T11:15:00.000",
    estimated: "2026-08-20T16:15:00.000", // --> 2
  },

  { name: "Bobruysk", status: "cancelled", planned: "2026-08-20T12:00:00.000" },

  {
    name: "Syktyvkar",
    status: "departured",
    planned: "2026-08-20T15:05:00.000",
    estimated: "2026-08-20T15:05:00.000",
    actual: "2026-08-20T14:55:00.000",
  },

  // now ------

  {
    name: "Tbilisi",
    status: "delayed",
    planned: "2026-08-20T18:40:00.000",
    estimated: "2026-08-20T19:25:00.000",
  },
  {
    name: "Krasnoyarsk",
    status: "cancelled",
    planned: "2026-08-20T18:50:00.000",
  },
  {
    name: "Tbilisi",
    status: "delayed",
    planned: "2026-08-20T18:40:00.000",
    estimated: "2026-08-20T19:25:00.000",
  },
  {
    name: "Krasnoyarsk",
    status: "cancelled",
    planned: "2026-08-20T18:50:00.000",
  },
  {
    name: "Tbilisi",
    status: "delayed",
    planned: "2026-08-20T18:40:00.000",
    estimated: "2026-08-20T19:25:00.000",
  },
  {
    name: "Krasnoyarsk",
    status: "cancelled",
    planned: "2026-08-20T18:50:00.000",
  },
  {
    name: "Tbilisi",
    status: "delayed",
    planned: "2026-08-20T18:40:00.000",
    estimated: "2026-08-20T19:25:00.000",
  },
  {
    name: "Krasnoyarsk",
    status: "cancelled",
    planned: "2026-08-20T18:50:00.000",
  },
  {
    name: "Tbilisi",
    status: "delayed",
    planned: "2026-08-20T18:40:00.000",
    estimated: "2026-08-20T19:25:00.000",
  },
  {
    name: "Krasnoyarsk",
    status: "cancelled",
    planned: "2026-08-20T18:50:00.000",
  },

  {
    name: "Belgrade",
    status: "estimated",
    planned: "2026-08-20T18:40:00.000",
  },
];

async function presentCurrentState() {
  try {
    const { before, after } = await loadTimeline(fallbackFlights);
    const gap = 2;
    const rectWidth = 12;
    const sidePadding = 24;
    const availableWidth = Math.max(1, window.innerWidth / 2 - sidePadding);
    const itemLimit = Math.max(
      1,
      Math.floor(availableWidth / (rectWidth + gap)),
    );

    drawTimeline(pastRow, before, itemLimit);
    drawTimelineFuture(futureRow, after, itemLimit);
    countDisplay.textContent = `Past: ${before.length} | Future: ${after.length}`;
  } catch (error) {
    console.error("Unable to render timeline:", error);
  }
}

presentCurrentState();
window.addEventListener("resize", presentCurrentState);
