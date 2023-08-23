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
  const legendMargin = {
    id: "legendMargin",
    beforeInit: function (chart: any) {
      const originalFit = chart.legend.fit;
      chart.legend.fit = function fit() {
        originalFit.bind(chart.legend)();
        this.height += 20;
      };
    },
  };

  return (
    <Line
      plugins={[legendMargin]}
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
              padding: 15,
              font: {
                family: "DM Sans, sans-serif",
                size: 14,
                lineHeight: 18,
              },
            },
            onHover: function (evt, item, legend) {
              const index = item?.datasetIndex as number;
              legend.chart.data.datasets.forEach((d, id) => {
                if (id === index) return item;
                d.borderColor += "2b";
                d.pointBackgroundColor += "2b";
              });
              legend.chart.update();
            },
            onLeave: function (evt, item, legend) {
              const index = item?.datasetIndex as number;
              legend.chart.data.datasets.forEach((d, id) => {
                if (id !== index) {
                  d.borderColor = d.borderColor?.toString().slice(0, -2);
                  d.pointBackgroundColor = d.pointBackgroundColor
                    ?.toString()
                    .slice(0, -2);
                }
              });
              legend.chart.update();
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
