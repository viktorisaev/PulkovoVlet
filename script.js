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
    estimated: "2026-08-20T10:20:00.000",
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
    estimated: "2026-08-20T15:55:00.000", // --> 2
  },

  { name: "Bobruysk", status: "cancelled", planned: "2026-08-20T12:00:00.000" },
  // now

  {
    name: "Syktyvkar",
    status: "departured",
    planned: "2026-08-20T16:00:00.000",
    estimated: "2026-08-20T16:10:00.000",
    actual: "2026-08-20T16:25:00.000",
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
];

function toTimelineItem(flight) {
  switch (flight.status) {
    case "departured":
      return [
        { name: flight.name, timestamp: flight.actual, design: "design3" },
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

function drawTimeline(rowElement, timeline) {
  const gap = 2;
  const rectWidth = 12;
  const rowWidth = Math.max(
    1,
    Math.floor((window.innerWidth / 2 - 24) / (rectWidth + gap)),
  );

  rowElement.innerHTML = "";

  const itemsToRender = timeline.slice(0, rowWidth);

  itemsToRender.forEach(({ name, timestamp, design }) => {
    const rect = document.createElement("div");
    rect.className = `rect ${design}`;
    rect.style.width = `${rectWidth}px`;
    rect.title = `${name ?? "Unknown"}`;
    rowElement.appendChild(rect);
  });
}

async function drawRectangles() {
  try {
    const { before, after } = await loadTimeline();
    drawTimeline(pastRow, before);
    drawTimeline(futureRow, after);
    countDisplay.textContent = `Past: ${before.length} | Future: ${after.length}`;
  } catch (error) {
    console.error("Unable to render timeline:", error);
  }
}

drawRectangles();
window.addEventListener("resize", drawRectangles);
