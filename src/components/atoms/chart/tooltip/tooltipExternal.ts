export const getOrCreateTooltip = (chart: any) => {
  let tooltipEl = chart.canvas.parentNode.querySelector("div");

  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.style.background = "#323944";
    tooltipEl.style.borderRadius = "8px";
    tooltipEl.style.padding = "16px";
    tooltipEl.style.width = "248px";
    tooltipEl.style.color = "white";
    tooltipEl.style.opacity = 1;
    tooltipEl.style.pointerEvents = "none";
    tooltipEl.style.position = "absolute";
    tooltipEl.style.transform = "translate(-50%, 0)";
    tooltipEl.style.transition = "all .1s ease";

    const div = document.createElement("div");

    tooltipEl.appendChild(div);
    chart.canvas.parentNode.appendChild(tooltipEl);
  }

  return tooltipEl;
};
