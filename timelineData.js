const timerightnow = "2026-08-20T15:00:00.000";

function toTimelineItem(flight) {
  switch (flight.status) {
    case "Departed":
      return [
        {
          name: flight.name,
          timestamp: flight.actual,
          design: "design3",
          outofrow: true,
        },
      ];
    case "Estimated":
      return [
        {
          name: flight.name,
          timestamp: flight.estimated ?? flight.planned,
          design: "design1",
        },
      ];
    case "Delayed":
      return [
        { name: flight.name, timestamp: flight.planned, design: "design2" },
        { name: flight.name, timestamp: flight.estimated, design: "design5" },
      ];
    case "Cancelled":
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

async function loadTimeline(flightsList) {
  return splitTimeline(buildTimeline(flightsList));
}
