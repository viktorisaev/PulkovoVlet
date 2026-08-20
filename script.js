const row = document.getElementById("row");
const countDisplay = document.getElementById("count");

function drawRectangles() {
  const gap = 2;
  const rectWidth = 12;
  const borderWidth = 1;
  const viewportWidth = window.innerWidth;

  const maxRectangles = Math.max(1, Math.floor(viewportWidth / rectWidth));

  const usableWidth = viewportWidth;
  const totalGap = (maxRectangles - 1) * gap;

  row.innerHTML = "";

  for (let i = 0; i < maxRectangles; i++) {
    const rect = document.createElement("div");
    const design =
      i % 8 === 0
        ? "design1"
        : i % 6 === 1
          ? "design2"
          : i % 5 === 1
            ? "design3"
            : i % 3 === 1
              ? "design4"
              : "design5";
    rect.className = `rect ${design}`;
    rect.style.width = `${rectWidth}px`;
    row.appendChild(rect);
  }

  countDisplay.textContent = `Rectangles: ${maxRectangles}`;
}

drawRectangles();
window.addEventListener("resize", drawRectangles);
