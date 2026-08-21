const row = document.getElementById("row");
const countDisplay = document.getElementById("count");
const countdownDisplay = document.getElementById("countdown");
const lastDepartureDisplay = document.getElementById("last-departure");
const pastRow = document.getElementById("past-row");
const futureRow = document.getElementById("future-row");

const fallbackFlights = [
  {
    name: "Bobruysk",
    status: "Delayed",
    planned: "2026-08-20T09:00:00.000",
    estimated: "2026-08-20T15:55:00.000",
  },
  {
    TimeStamp: "2026-08-20T15:00:00.000",

    name: "Nizhnekamsk",
    status: "Departed",
    planned: "2026-08-20T10:00:00.000",
    estimated: "2026-08-20T10:00:00.000",
    actual: "2026-08-20T10:00:00.000",
  },

  //delay1
  {
    name: "Chelyabinsk",
    status: "Departed",
    planned: "2026-08-20T10:30:00.000",
    estimated: "2026-08-20T10:30:00.000",
    actual: "2026-08-20T10:30:00.000",
  },
  { name: "Bobruysk", status: "Cancelled", planned: "2026-08-20T11:00:00.000" },

  {
    name: "Nizhnekamsk",
    status: "Delayed",
    planned: "2026-08-20T11:15:00.000",
    estimated: "2026-08-20T16:15:00.000", // --> 2
  },

  { name: "Bobruysk", status: "Cancelled", planned: "2026-08-20T12:00:00.000" },

  {
    name: "Syktyvkar",
    status: "Departed",
    planned: "2026-08-20T15:05:00.000",
    estimated: "2026-08-20T15:05:00.000",
    actual: "2026-08-20T14:55:00.000",
  },
  {
    name: "Bobruysk",
    status: "Delayed",
    planned: "2026-08-20T09:00:00.000",
    estimated: "2026-08-20T15:55:00.000",
  },
  {
    name: "Nizhnekamsk",
    status: "Departed",
    planned: "2026-08-20T10:00:00.000",
    estimated: "2026-08-20T10:00:00.000",
    actual: "2026-08-20T10:00:00.000",
  },

  //delay1
  {
    name: "Chelyabinsk",
    status: "Departed",
    planned: "2026-08-20T10:30:00.000",
    estimated: "2026-08-20T10:30:00.000",
    actual: "2026-08-20T10:30:00.000",
  },
  { name: "Bobruysk", status: "Cancelled", planned: "2026-08-20T11:00:00.000" },

  {
    name: "Nizhnekamsk",
    status: "Delayed",
    planned: "2026-08-20T11:15:00.000",
    estimated: "2026-08-20T16:15:00.000", // --> 2
  },

  { name: "Bobruysk", status: "Cancelled", planned: "2026-08-20T12:00:00.000" },

  {
    name: "Syktyvkar",
    status: "Departed",
    planned: "2026-08-20T15:05:00.000",
    estimated: "2026-08-20T15:05:00.000",
    actual: "2026-08-20T14:55:00.000",
  },
  {
    name: "Bobruysk",
    status: "Delayed",
    planned: "2026-08-20T09:00:00.000",
    estimated: "2026-08-20T15:55:00.000",
  },
  {
    name: "Nizhnekamsk",
    status: "Departed",
    planned: "2026-08-20T10:00:00.000",
    estimated: "2026-08-20T10:00:00.000",
    actual: "2026-08-20T10:00:00.000",
  },

  //delay1
  {
    name: "Chelyabinsk",
    status: "Departed",
    planned: "2026-08-20T10:30:00.000",
    estimated: "2026-08-20T10:30:00.000",
    actual: "2026-08-20T10:30:00.000",
  },
  { name: "Bobruysk", status: "Cancelled", planned: "2026-08-20T11:00:00.000" },

  {
    name: "Nizhnekamsk",
    status: "Delayed",
    planned: "2026-08-20T11:15:00.000",
    estimated: "2026-08-20T16:15:00.000", // --> 2
  },

  { name: "Bobruysk", status: "Cancelled", planned: "2026-08-20T12:00:00.000" },

  {
    name: "Syktyvkar",
    status: "Departed",
    planned: "2026-08-20T15:05:00.000",
    estimated: "2026-08-20T15:05:00.000",
    actual: "2026-08-20T14:55:00.000",
  },
  {
    name: "Bobruysk",
    status: "Delayed",
    planned: "2026-08-20T09:00:00.000",
    estimated: "2026-08-20T15:55:00.000",
  },
  {
    name: "Nizhnekamsk",
    status: "Departed",
    planned: "2026-08-20T10:00:00.000",
    estimated: "2026-08-20T10:00:00.000",
    actual: "2026-08-20T10:00:00.000",
  },

  //delay1
  {
    name: "Chelyabinsk",
    status: "Departed",
    planned: "2026-08-20T10:30:00.000",
    estimated: "2026-08-20T10:30:00.000",
    actual: "2026-08-20T10:30:00.000",
  },
  { name: "Bobruysk", status: "Cancelled", planned: "2026-08-20T11:00:00.000" },

  {
    name: "Nizhnekamsk",
    status: "Delayed",
    planned: "2026-08-20T11:15:00.000",
    estimated: "2026-08-20T16:15:00.000", // --> 2
  },

  { name: "Bobruysk", status: "Cancelled", planned: "2026-08-20T12:00:00.000" },

  {
    name: "Syktyvkar",
    status: "Departed",
    planned: "2026-08-20T15:05:00.000",
    estimated: "2026-08-20T15:05:00.000",
    actual: "2026-08-20T14:55:00.000",
  },
  {
    name: "Bobruysk",
    status: "Delayed",
    planned: "2026-08-20T09:00:00.000",
    estimated: "2026-08-20T15:55:00.000",
  },
  {
    name: "Nizhnekamsk",
    status: "Departed",
    planned: "2026-08-20T10:00:00.000",
    estimated: "2026-08-20T10:00:00.000",
    actual: "2026-08-20T10:00:00.000",
  },

  //delay1
  {
    name: "Chelyabinsk",
    status: "Departed",
    planned: "2026-08-20T10:30:00.000",
    estimated: "2026-08-20T10:30:00.000",
    actual: "2026-08-20T10:30:00.000",
  },
  { name: "Bobruysk", status: "Cancelled", planned: "2026-08-20T11:00:00.000" },

  {
    name: "Nizhnekamsk",
    status: "Delayed",
    planned: "2026-08-20T11:15:00.000",
    estimated: "2026-08-20T16:15:00.000", // --> 2
  },

  { name: "Bobruysk", status: "Cancelled", planned: "2026-08-20T12:00:00.000" },

  {
    name: "Syktyvkar",
    status: "Departed",
    planned: "2026-08-20T15:05:00.000",
    estimated: "2026-08-20T15:05:00.000",
    actual: "2026-08-20T14:55:00.000",
  },

  // now ------

  {
    name: "Tbilisi",
    status: "Delayed",
    planned: "2026-08-20T18:40:00.000",
    estimated: "2026-08-20T19:25:00.000",
  },
  {
    name: "Krasnoyarsk",
    status: "Cancelled",
    planned: "2026-08-20T18:50:00.000",
  },
  {
    name: "Tbilisi",
    status: "Delayed",
    planned: "2026-08-20T18:40:00.000",
    estimated: "2026-08-20T19:25:00.000",
  },
  {
    name: "Krasnoyarsk",
    status: "Cancelled",
    planned: "2026-08-20T18:50:00.000",
  },
  {
    name: "Tbilisi",
    status: "Delayed",
    planned: "2026-08-20T18:40:00.000",
    estimated: "2026-08-20T19:25:00.000",
  },
  {
    name: "Krasnoyarsk",
    status: "Cancelled",
    planned: "2026-08-20T18:50:00.000",
  },
  {
    name: "Tbilisi",
    status: "Delayed",
    planned: "2026-08-20T18:40:00.000",
    estimated: "2026-08-20T19:25:00.000",
  },
  {
    name: "Krasnoyarsk",
    status: "Cancelled",
    planned: "2026-08-20T18:50:00.000",
  },
  {
    name: "Tbilisi",
    status: "Delayed",
    planned: "2026-08-20T18:40:00.000",
    estimated: "2026-08-20T19:25:00.000",
  },
  {
    name: "Krasnoyarsk",
    status: "Cancelled",
    planned: "2026-08-20T18:50:00.000",
  },

  {
    name: "Belgrade",
    status: "estimated",
    planned: "2026-08-20T18:40:00.000",
  },
];

function findCurrentTimeFromResponse(listFlights) {
  if (!Array.isArray(listFlights)) return null;

  for (const flight of listFlights) {
    if (
      flight &&
      typeof flight === "object" &&
      Object.prototype.hasOwnProperty.call(flight, "TimeStamp")
    ) {
      return new Date(flight.TimeStamp); // Convert to DateTime type
    }
  }

  return new Date();
}

function parseFlightsFromJson(jsonText) {
  try {
    const parsed = jsonText;
    const flights = Array.isArray(parsed) ? parsed : [parsed];

    return flights
      .filter((flight) => flight && typeof flight === "object")
      .map((flight) => {
        const status =
          typeof flight.OD_STATUS_EN === "string"
            ? flight.OD_STATUS_EN.trim()
            : "";

        const mappedFlight = {
          name: flight.OD_RAP_NEXT_NAME_EN || "",
          status: status || "Estimated",
          planned: flight.OD_STD || "",
          estimated: flight.OD_ETD || "",
        };

        if (flight.OD_ATD) {
          mappedFlight.actual = flight.OD_ATD;
        }

        if (flight.OD_FLIGHT_NUMBER) {
          mappedFlight.flight = flight.OD_FLIGHT_NUMBER;
        }

        if (flight.TimeStamp) {
          mappedFlight.TimeStamp = flight.TimeStamp;
        }

        return mappedFlight;
      });
  } catch (error) {
    console.error("Failed to parse flight JSON", error);
    return [];
  }
}

async function loadActualFlights() {
  const urls = [
    "https://pulkovoairport.ru/api/?type=departure&when=-1",
    "https://pulkovoairport.ru/api/?type=departure&when=0",
    "https://pulkovoairport.ru/api/?type=departure&when=+1",
  ];

  try {
    const responses = await Promise.all(
      urls.map(async (url) => {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        return response.json();
      }),
    );

    const combinedRawFlights = responses.flatMap((data) =>
      Array.isArray(data) ? data : [data],
    );

    return parseFlightsFromJson(combinedRawFlights);
  } catch (error) {
    console.error(
      "Unable to load flights from remote API, using fallback data",
      error,
    );
    return parseFlightsFromJson(fallbackFlights);
  }
}

async function presentCurrentState(allFlights) {
  const timerightnow = findCurrentTimeFromResponse(allFlights);

  try {
    const { before, after } = await loadTimeline(allFlights, timerightnow);
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
    countDisplay.textContent = `Now: ${timerightnow.toLocaleString()}`;
    updateLastDepartureDisplay(allFlights, timerightnow);
  } catch (error) {
    console.error("Unable to render timeline:", error);
  }
}

async function initializeFlights() {
  const flightsToday = await loadActualFlights();
  presentCurrentState(flightsToday);
  window.addEventListener("resize", () => presentCurrentState(flightsToday));
}

const UPDATE_INTERVAL_MS = 11 * 60 * 1000;
let nextUpdateAt = Date.now() + UPDATE_INTERVAL_MS;

function formatCountdown(ms) {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function updateCountdownDisplay() {
  const remainingMs = Math.max(0, nextUpdateAt - Date.now());
  countdownDisplay.textContent = `Next update in ${formatCountdown(remainingMs)}`;
}

async function refreshFlights() {
  const flightsToday = await loadActualFlights();
  await presentCurrentState(flightsToday);
  nextUpdateAt = Date.now() + UPDATE_INTERVAL_MS;
  updateCountdownDisplay();
}

function startAutoRefresh() {
  updateCountdownDisplay();

  setInterval(() => {
    const remainingMs = nextUpdateAt - Date.now();

    if (remainingMs <= 0) {
      refreshFlights();
      return;
    }

    updateCountdownDisplay();
  }, 1000);
}

function getLatestDepartureDate(flights, timerightnow) {
  if (!Array.isArray(flights) || !timerightnow) return null;

  const departureDates = flights
    .filter(
      (flight) =>
        flight &&
        typeof flight === "object" &&
        !(flight.status || "").toLowerCase().includes("cancelled"),
    )
    .map((flight) => {
      const rawDeparture = flight.actual || flight.estimated || flight.planned;
      if (!rawDeparture) return null;

      const parsedDate = new Date(rawDeparture);
      if (Number.isNaN(parsedDate.getTime()) || parsedDate > timerightnow) {
        return null;
      }

      return parsedDate;
    })
    .filter((date) => date instanceof Date && !Number.isNaN(date.getTime()));

  if (departureDates.length === 0) return null;

  departureDates.sort((a, b) => b.getTime() - a.getTime());
  return departureDates[0];
}

function calculateLastDepartureTimespan(flights, timerightnow) {
  const lastDepartureDate = getLatestDepartureDate(flights, timerightnow);

  if (!lastDepartureDate) return null;

  var lastDepartureTimespan = Math.max(
    0,
    timerightnow.getTime() - lastDepartureDate.getTime(),
  );

  console.log("Last departure date:", lastDepartureDate);
  console.log("Last departure timespan:", lastDepartureTimespan);
  return lastDepartureTimespan;
}

function formatDuration(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  console.log(
    "total seconds:",
    totalSeconds,
    "hours:",
    hours,
    "minutes:",
    minutes,
    "seconds:",
    seconds,
  );

  return `${String(minutes)} minutes`;
}

function updateLastDepartureDisplay(flights, timerightnow) {
  const lastDepartureTimespan = calculateLastDepartureTimespan(
    flights,
    timerightnow,
  );

  if (lastDepartureTimespan === null) {
    lastDepartureDisplay.textContent = "Last departure: --";
    return;
  }

  lastDepartureDisplay.textContent = `Last departure: ${formatDuration(lastDepartureTimespan)} ago`;
}

initializeFlights();
startAutoRefresh();
