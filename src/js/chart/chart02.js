import Chart from "chart.js/auto";
import { orangeGradient, yellowGradient } from './color'
import onResize from './on-resize';

const ctx = document.getElementById("02_chart").getContext("2d");
export default () => {
  new Chart(ctx, {
    data: {
      labels: [
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023 Q1",
      ],
      datasets: [
        {
          type: "bar",
          data: [3.42, 2.27, 3.47, 3.42, 2.0, 3.69, 7.03, 5.66, 5.51],
          backgroundColor: yellowGradient(ctx),
          datalabels: {
            align: "top",
            anchor: "end",
            color: "#EBB835",
          },
        },
        {
          type: "bar",
          data: [1.13, 0.94, 0.95, 1.15, 0.82, 1.0, 1.87, 1.86, 1.49],
          backgroundColor: orangeGradient(ctx),
          datalabels: {
            align: "top",
            anchor: "end",
            color: "#EA7000",
          },
        },
      ],
    },
    options: {
      barPercentage: 0.9, // 柱子寬度佔類別寬度的百分比
      categoryPercentage: 1,
      onResize,
      scales: {
        y: {
          border: {
            display: false,
          },
          grid: {
            color: "#F8DEB9",
          },
          ticks: {
            color: "#6d4e00",
            padding: 3,
            callback: function (value) {
              if (value === 0 || value % 2 === 0) {
                return value;
              } else {
                return null; // 不顯示該刻度
              }
            },
          },
          min: 0,
          max: 10,
          beginAtZero: true,
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: "#5B340880",
          },
        },
      },
    },
  });
}