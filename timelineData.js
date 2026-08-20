function toTimelineItem(flight) {
  switch (flight.status) {
    case "Departed":
      return [
        {
          flight: flight.flight,
          name: flight.name,
          timestamp: flight.actual,
          design: "design3",
          outofrow: true,
        },
      ];
    case "Estimated":
      return [
        {
          flight: flight.flight,
          name: flight.name,
          timestamp: flight.estimated ?? flight.planned,
          design: "design1",
        },
      ];
    case "Delayed":
      return [
        {
          flight: flight.flight,
          name: flight.name,
          timestamp: flight.planned,
          design: "design2",
        },
        {
          flight: flight.flight,
          name: flight.name,
          timestamp: flight.estimated,
          design: "design5",
        },
      ];
    case "Cancelled":
      return [
        {
          flight: flight.flight,
          name: flight.name,
          timestamp: flight.planned,
          design: "design4",
        },
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

function splitTimeline(timeline, timerightnow) {
  var rightNow = new Date(timerightnow);

  return timeline.reduce(
    (groups, item) => {
      if (new Date(item.timestamp) < rightNow) {
        groups.before.push(item);
      } else {
        groups.after.push(item);
      }
      return groups;
    },
    { before: [], after: [] },
  );
}

async function loadTimeline(flightsList, timerightnow) {
  return splitTimeline(buildTimeline(flightsList), timerightnow);
}
