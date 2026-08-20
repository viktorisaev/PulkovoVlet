const row = document.getElementById("row");
const countDisplay = document.getElementById("count");
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

// to long

function parseFlightsFromJson(jsonText) {
  try {
    const parsed = JSON.parse(jsonText || "[]");
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

        return mappedFlight;
      });
  } catch (error) {
    console.error("Failed to parse flight JSON", error);
    return [];
  }
}

async function presentCurrentState(allFlights) {
  try {
    const { before, after } = await loadTimeline(allFlights);
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

var flightsToday = parseFlightsFromJson(aaa);

// flightsToday.forEach((flight, i) => {
//   console.log(
//     `${i}: Status: ${flight.status}, Flight: ${flight.name}, Planned: ${flight.planned}, Estimated: ${flight.estimated}, Actual: ${flight.actual}`,
//   );
// });

presentCurrentState(flightsToday);
window.addEventListener("resize", presentCurrentState);
