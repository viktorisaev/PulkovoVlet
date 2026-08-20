const row = document.getElementById("row");
const countDisplay = document.getElementById("count");
const pastRow = document.getElementById("past-row");
const futureRow = document.getElementById("future-row");

const timerightnow = "2026-08-20T15:00:00.000";

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
    planned: "2026-08-20T23:40:00.000",
  },
];

function toTimelineItem(flight) {
  switch (flight.status) {
    case "departured":
      return [
        {
          name: flight.name,
          timestamp: flight.actual,
          design: "design3",
          outofrow: true,
        },
      ];
    case "estimated":
      return [
        {
          name: flight.name,
          timestamp: flight.estimated ?? flight.planned,
          design: "design1",
        },
      ];
    case "delayed":
      return [
        { name: flight.name, timestamp: flight.planned, design: "design2" },
        { name: flight.name, timestamp: flight.estimated, design: "design5" },
      ];
    case "cancelled":
      return [
        { name: flight.name, timestamp: flight.planned, design: "design4" },
      ];
    default:
      return [];
  }
}

function buildTimeline(flights) {
  return flights
    .flatMap(toTimelineItem)
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
}

function splitTimeline(timeline) {
  return timeline.reduce(
    (groups, item) => {
      if (new Date(item.timestamp) < new Date(timerightnow)) {
        groups.before.push(item);
      } else {
        groups.after.push(item);
      }
      return groups;
    },
    { before: [], after: [] },
  );
}

async function loadTimeline() {
  return splitTimeline(buildTimeline(fallbackFlights));
}

function createTimelineRect({ name, design, outofrow }) {
  const rect = document.createElement("div");
  rect.className = `rect ${design}`;
  if (outofrow) {
    rect.classList.add("outofrow");
  }
  rect.style.width = "12px";
  rect.title = `${name ?? "Unknown"}`;
  return rect;
}

function drawTimeline(rowElement, timeline, itemLimit) {
  const gap = 2;
  const rectWidth = 12;
  const sidePadding = 24;

  rowElement.innerHTML = "";
  rowElement.style.width = `${itemLimit * (rectWidth + gap) - gap}px`;

  const itemsToRender = timeline.slice(-itemLimit);

  itemsToRender.forEach((item) => {
    rowElement.appendChild(createTimelineRect(item));
  });
}

function drawTimelineFuture(rowElement, timeline, itemLimit) {
  const gap = 2;
  const rectWidth = 12;

  rowElement.innerHTML = "";
  rowElement.style.width = `${itemLimit * (rectWidth + gap) - gap}px`;

  const itemsToRender = timeline.slice(0, itemLimit);

  itemsToRender.forEach((item) => {
    rowElement.appendChild(createTimelineRect(item));
  });
}

async function drawRectangles() {
  try {
    const { before, after } = await loadTimeline();
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

drawRectangles();
window.addEventListener("resize", drawRectangles);
