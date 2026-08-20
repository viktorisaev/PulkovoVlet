function createTimelineRect({ name, design, outofrow }) {
  const rect = document.createElement("div");
  rect.className = `rect ${design}`;
  if (outofrow) {
    rect.classList.add("outstanding");
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

window.createTimelineRect = createTimelineRect;
window.drawTimeline = drawTimeline;
window.drawTimelineFuture = drawTimelineFuture;
