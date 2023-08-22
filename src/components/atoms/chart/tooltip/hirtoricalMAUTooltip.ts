import { addMonths, format, parse } from "date-fns";
import { getOrCreateTooltip } from "./tooltipExternal";

export const historicalMAUTooltip = (context: any) => {
  // Tooltip Element
  const { chart, tooltip } = context;
  const tooltipEl = getOrCreateTooltip(chart);

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  // Set Text
  if (tooltip.body) {
    const tableRoot = tooltipEl.querySelector("table");
    if (tableRoot) {
      tableRoot.remove();
    }

    const start = parse(
      chart.tooltip.dataPoints[0].label,
      "MMM yyyy",
      new Date()
    );

    const startPeriod = document.createElement("p");
    const endPeriod = document.createElement("p");
    const monthly = document.createElement("p");

    const startPeriodBold = document.createElement("b");
    const endPeriodBold = document.createElement("b");
    const monthlyBold = document.createElement("b");

    startPeriod.innerHTML = "Start Period: ";
    endPeriod.innerHTML = "End Period: ";
    monthly.innerHTML = "Monthly Active User: ";

    startPeriodBold.innerHTML = format(start, "dd MMM yyyy");
    endPeriodBold.innerHTML = format(addMonths(start, 1), "dd MMM yyyy");
    monthlyBold.innerHTML = tooltip.dataPoints?.[0]?.raw;

    startPeriod.appendChild(startPeriodBold);
    endPeriod.appendChild(endPeriodBold);
    monthly.appendChild(monthlyBold);

    const tooltipDiv = tooltipEl.querySelector("div");
    const div = document.createElement("div");

    if (tooltipDiv) {
      tooltipDiv.appendChild(div);
      if (tooltipDiv?.children?.length > 1) {
        tooltipDiv.firstChild.remove();
      }
    }

    div.append(startPeriod);
    div.append(endPeriod);
    div.append(monthly);

    const p = div.querySelectorAll("p");
    const b = div.querySelectorAll("b");
    if (p.length) {
      p.forEach((item) => {
        item.style.fontFamily = "DM Sans, sans-serif";
        item.style.fontSize = "14px";
        item.style.textAlign = "center";
        item.style.color = "#AABDD7";
      });
    }

    if (b.length) {
      b.forEach((item) => (item.style.color = "#fff"));
    }
  }

  const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

  // Display, position, and set styles for font
  tooltipEl.style.opacity = 1;
  tooltipEl.style.left = positionX + tooltip.caretX + "px";
  tooltipEl.style.top = positionY + tooltip.caretY + "px";
  tooltipEl.style.font = tooltip.options.bodyFont.string;
  tooltipEl.style.padding =
    tooltip.options.padding + "px " + tooltip.options.padding + "px";
};
