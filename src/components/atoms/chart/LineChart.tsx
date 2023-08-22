"use client";

import type { ChartData } from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import { externalTooltipHandler } from "./tooltipExternal";

interface LineChartProps extends ChartData<"line"> {}

const LineChart: React.FC<LineChartProps> = ({ datasets, labels }) => {
  return (
    <Line
      options={{
        responsive: true,
        borderColor: "#fff",
        layout: {
          padding: 12,
        },
        datasets: {
          line: {
            borderWidth: 1,
            borderColor: "#0D0F12",
            pointBackgroundColor: "#0D0F12",
            pointBorderWidth: 0,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: false },
            ticks: {
              stepSize: 20,
            },
            grid: {
              color: "#EEF4FB",
            },
            axis: "x",
          },
          x: {
            title: { display: false },
            grid: {
              drawOnChartArea: false,
            },
          },
        },
        plugins: {
          tooltip: {
            enabled: false,
            position: "nearest",
            backgroundColor: "#323944",
            external: (props) => {
              externalTooltipHandler(props);
            },
            // external: (chart) => {
            //   const tooltipEl =
            //     chart?.chart?.canvas?.parentNode?.querySelector("div");

            //   if (tooltipEl) {
            //     tooltipEl.style.background = "rgba(0, 0, 0, 0.7)";
            //     tooltipEl.style.borderRadius = "3px";
            //     tooltipEl.style.color = "white";
            //     tooltipEl.style.opacity = "1";
            //     tooltipEl.style.pointerEvents = "none";
            //     tooltipEl.style.position = "absolute";
            //     tooltipEl.style.transform = "translate(-50%, 0)";
            //     tooltipEl.style.transition = "all .1s ease";
            //   }

            //   const start = parse(
            //     chart.tooltip.dataPoints[0].label,
            //     "MMM yyyy",
            //     new Date()
            //   );

            //   const p = document.createElement("p");
            //   p.innerHTML = format(start, "dd MM yyyy");

            //   tooltipEl?.appendChild(p);
            // },
          },
        },
      }}
      data={{ labels, datasets }}
    />
  );
};

export default LineChart;
