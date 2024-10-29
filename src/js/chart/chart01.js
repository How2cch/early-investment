import Chart from "chart.js/auto";
import { orangeGradient, blueGradient, orangeGradientHighlight } from "./color";
import onResize from "./on-resize";

const onResize01 = (chart) => {
  const windowWidth = window.innerWidth;

  let fontSize = 4.5;
  if (windowWidth >= 450) fontSize = 5;
  if (windowWidth >= 520) fontSize = 6;
  if (windowWidth >= 580) fontSize = 7;
  if (windowWidth >= 620) fontSize = 8;
  if (windowWidth >= 768 && windowWidth < 1440) fontSize = 10;
  if (windowWidth >= 1440) fontSize = 14;

  Chart.defaults.font.size = fontSize;

  // 重新渲染圖表
  chart.update();
}

const ctx = document.getElementById("01_chart").getContext("2d");

export default () => {
  const chart = new Chart(ctx, {
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
        "2023",
        "2024 Q1",
      ],
      datasets: [
        {
          type: "line",
          data: [264, 292, 296, 304, 447, 410, 452, 491, 542],
          yAxisID: "y-right",
          borderColor: "#FFD057",
          pointBackgroundColor: "#39738E",
          datalabels: {
            align: "top",
            color: "#39738E",
          },
          animation: {
            duration: 0,
          },
        },
        {
          type: "line",
          data: [null, null, null, null, null, null, null, null, 542, 107],
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
          data: [0.85, 0.64, 0.93, 0.94, 0.83, 1.33, 2.68, 2.54, 2.79, 0.53],
          backgroundColor: [
            orangeGradient(ctx),
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
            color: "#4F4F4F",
          },
        },
      ],
    },
    options: {
      barPercentage: 0.9, // 柱子寬度佔類別寬度的百分比
      categoryPercentage: 1,
      onResize: (chart) => onResize01(chart),
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
          max: 600,
          beginAtZero: true,
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: "#5B3408",
            maxRotation: 0, 
            minRotation: 0, 
            autoSkip: false,
            maxTicksLimit: 9,
          },
        },
      },
      plugins: {
        tooltip: {
          interaction:{
            intersect: false,
            mode: "index",

          },
          filter: function (tooltipItem) {
            // 只顯示 datasetIndex 0 和 2 的資料 (忽略 datasetIndex 1), 且顯示 datasetIndex 1 的最後一的欄位
            return tooltipItem.datasetIndex !== 1 || tooltipItem.dataIndex === 9;
          },
    
        },
      },

    
    },
  });

  const popoverBtn = document.querySelector('[data-id="chart_01"]');
  popoverBtn.setAttribute("data-id", "chart_01_current");

  const chart_01_switch = document.querySelector("#chart_01_switch");
  chart_01_switch.addEventListener("change", function () {
    const lastIndex = chart.data.labels.length - 1;
    if (this.checked) {
      chart.data.labels[lastIndex] = "2024 (f)";
      chart.data.datasets[1].showLine = true;
      chart.data.datasets[1].data[lastIndex] = 0; // TODO: 數字待補
      chart.data.datasets[2].data[lastIndex] = 0; // TODO: 數字待補
      popoverBtn.setAttribute("data-id", "chart_01_future");
    } else {
      chart.data.labels[lastIndex] = "2024 Q1";
      chart.data.datasets[1].showLine = false;
      chart.data.datasets[1].data[lastIndex] = 107;
      chart.data.datasets[2].data[lastIndex] = 0.53;
      popoverBtn.setAttribute("data-id", "chart_01_current");
    }
    chart.update();
  });

  return chart;
};