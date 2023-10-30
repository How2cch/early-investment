import Chart from "chart.js/auto";
import { orangeGradient, blueGradient, orangeGradientHighlight } from './color'
import onResize from './on-resize'

const ctx = document.getElementById("01_chart").getContext("2d")

export default () => {
  const chart = new Chart(ctx, {
    data: {
      labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023 Q1"],
      datasets: [
        {
          type: "line",
          data: [262, 290, 294, 298, 439, 399, 412, 422],
          yAxisID: "y-right",
          borderColor: "#FFD057",
          pointBackgroundColor: "#39738E",
          datalabels: {
            align: "top",
            color: "#39738E",
          },
        },
        {
          type: "line",
          data: [null, null, null, null, null, null, null, 422, 105],
          yAxisID: "y-right",
          borderColor: "#FFD057",
          borderDash: [5, 5],
          showLine: false,
          pointBackgroundColor: "#39738E",
          pointBorderWidth: 0,
          datalabels: {
            align: "top",
            color: "#39738E",
          },
        },
        {
          type: "bar",
          data: [0.84, 0.62, 0.93, 0.93, 0.81, 1.32, 2.58, 2.22, 0.53],
          backgroundColor: [
            orangeGradient(ctx),
            orangeGradient(ctx),
            orangeGradient(ctx),
            orangeGradient(ctx),
            orangeGradient(ctx),
            orangeGradient(ctx),
            orangeGradient(ctx),
            blueGradient(ctx),
            blueGradient(ctx),
          ],
          yAxisID: "y-left",
          datalabels: {
            align: "start",
            anchor: "start",
            offset: function () {
              const width = window.innerWidth;
              if (width < 768) return -20;
              if (width < 1440) return -30;
              return -40;
            },
            color: "#fff",
          },
        },
      ],
    },
    options: {
      barPercentage: 0.9, // 柱子寬度佔類別寬度的百分比
      categoryPercentage: 1,
      onResize,
      scales: {
        "y-left": {
          position: "left",
          border: {
            display: false,
          },
          grid: {
            color: "#F8DEB9",
          },
          ticks: {
            color: "#6d4e00",
            padding: 10,
          },
          min: 0,
          max: 3,
          beginAtZero: true,
        },
        "y-right": {
          position: "right",
          border: {
            display: false,
          },
          grid: {
            color: "#F8DEB9",
          },
          ticks: {
            color: "#6d4e00",
            padding: 10,
            callback: function (value) {
              if (value === 0 || value % 100 === 0) {
                return value;
              } else {
                return null; // 不顯示該刻度
              }
            },
          },
          min: 0,
          max: 500,
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

  const chart_01_switch = document.querySelector("#chart_01_switch");
  chart_01_switch.addEventListener("change", function () {
    const lastIndex = chart.data.labels.length - 1;
    if (this.checked) {
      chart.data.labels[lastIndex] = "2023 F";
      chart.data.datasets[1].showLine = true;
      chart.data.datasets[1].data[lastIndex] = 446;
      chart.data.datasets[2].data[lastIndex] = 2.42;
      chart.data.datasets[2].backgroundColor[lastIndex] = orangeGradientHighlight(ctx);
    } else {
      chart.data.labels[lastIndex] = "2023 Q1";
      chart.data.datasets[1].showLine = false;
      chart.data.datasets[1].data[lastIndex] = 105;
      chart.data.datasets[2].data[lastIndex] = 0.53;
      chart.data.datasets[2].backgroundColor[lastIndex] = blueGradient(ctx);
    }
    chart.update()
  });
}