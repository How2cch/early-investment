import Chart from "chart.js/auto";
import { orangeGradient, orangeGradientHighlight2, orangeGradientHighlight3, yellowGradient } from './color'
import onResize from './on-resize';

const onResize02 = (chart) => {
  const windowWidth = window.innerWidth;

  let fontSize = 5;
  if (windowWidth >= 400) fontSize = 6;
  if (windowWidth >= 520) fontSize = 7;
  if (windowWidth >= 620) fontSize = 8;
  if (windowWidth >= 768 && windowWidth < 1440) fontSize = 10;
  if (windowWidth >= 1440) fontSize = 14;

  Chart.defaults.font.size = fontSize;

  // 重新渲染圖表
  chart.update();
}

const ctx = document.getElementById("02_chart").getContext("2d");
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
      grouped: true,
      datasets: [
        {
          type: "bar",
          data: [3.41, 2.34, 3.44, 3.39, "2.04", 3.62, 3.62, 5.65, 5.54, 5.51],
          backgroundColor:  (context) => context.dataIndex >= 8 ? orangeGradientHighlight2(ctx) : yellowGradient(ctx),
          datalabels: {
            align: "top",
            anchor: "end",
            color: "#EBB835",
          },
        },
        {
          type: "bar",
          data: [1.12, 0.94, 0.95, 1.16, 0.82, "1.00", "1.00", 1.81, "1.70", 2.45],
          backgroundColor:  (context) => context.dataIndex >= 8 ? orangeGradientHighlight3(ctx) : orangeGradient(ctx),
          datalabels: {
            align: "top",
            anchor: "end",
            color: "#EA7000",
          },
        },
        
      ],
    },
    options: {
      barPercentage: 1, // 柱子寬度佔類別寬度的百分比
      categoryPercentage: .8,
      onResize: (chart) => onResize02(chart),
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
          max: 6,
          beginAtZero: true,
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: "#5B340880",
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
        },
      },
    },
  });

  return chart;

}