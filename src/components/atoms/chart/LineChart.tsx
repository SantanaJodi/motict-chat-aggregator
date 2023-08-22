"use client";

import type { ChartData } from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

interface LineChartProps extends ChartData<"line"> {
  tooltip: (context: any) => void;
  showLegend?: boolean;
}

const LineChart: React.FC<LineChartProps> = ({
  datasets,
  labels,
  tooltip,
  showLegend,
}) => {
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
            borderWidth: 2,
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
          legend: {
            display: showLegend,
            position: "top",
            align: "start",
            textDirection: "center",
            labels: {
              boxWidth: 8,
              boxHeight: 8,
              pointStyle: "circle",
              usePointStyle: true,
              textAlign: "center",
              padding: 10,
              font: {
                family: "DM Sans, sans-serif",
                size: 14,
                lineHeight: 18,
              },
            },
            onHover: (item, e, legend) => {
              // console.log("🚀 -> legend:", legend.chart.updateHoverStyle);
              // console.log("🚀 -> e:", e);
              // console.log("🚀 -> item:", item);
            },
          },
          tooltip: {
            enabled: false,
            position: "nearest",
            external: tooltip,
          },
        },
      }}
      data={{ labels, datasets }}
    />
  );
};

export default LineChart;
