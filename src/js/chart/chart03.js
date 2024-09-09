import Chart from "chart.js/auto";
import onResize from "./on-resize";
import { gradient1, gradient2, gradient3, gradient4, gradient5 } from "./color";

const onResize03 = (chart) => {
  const windowWidth = window.innerWidth;

  let fontSize = 6;
  if (windowWidth >= 450) fontSize = 7;
  if (windowWidth >= 540) fontSize = 10;
  if (windowWidth >= 768 && windowWidth < 1440) fontSize = 10;
  if (windowWidth >= 1440) fontSize = 14;

  let padding = 10;
  if (windowWidth >= 1440) padding = 20;
  
  Chart.defaults.font.size = fontSize;
  chart.options.scales.y.ticks.padding = padding;

  // 重新渲染圖表
  chart.update();
}

const ctx = document.getElementById("03_chart").getContext("2d");
export default () => {
  const chart = new Chart(ctx, {
    type: "line",
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
      datasets: getAllData(),
    },
    options: {
      maintainAspectRatio: false,
      onResize: (chart) => onResize03(chart),
      layout: {
        padding: {
          right: 30,
        },
      },
      scales: {
        y: {
          border: {
            display: false,
          },
          grid: {
            color: "#DBDBDB",
          },
          ticks: {
            color: "#6d4e00",
            callback: function (value) {
              return value + "%";
            },
          },
          min: 0,
          max: 100,
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
    },
  });

  const popoverBtn = document.querySelector('[data-id="chart_03"]');
  popoverBtn.setAttribute("data-id", "chart_03_sum");

  const btnEventListener = (button, index) => {
    button.addEventListener("click", () => {
      radio_01_btns.forEach((btn) => {
        btn.classList.remove("active_brown");
      });

      button.classList.add("active_brown");

      const datasets = chart.data.datasets;
      datasets.forEach((item) => {
        item.hidden = true;
      });

      if (index === 0) {
        hideAllSingleData(datasets);
        popoverBtn.setAttribute("data-id", "chart_03_sum");
      } else {
        datasets[index - 1].hidden = false;
        popoverBtn.setAttribute("data-id", `chart_03_0${index}`);
      }

      chart.update();
    });
  };
  const radio_01_btns = document.querySelectorAll("#btn_radio_01 button");
  const radio_01_btns_mobile = document.querySelectorAll(
    "#btn_radio_01_mobile button"
  );
  radio_01_btns.forEach(btnEventListener);
  radio_01_btns_mobile.forEach(btnEventListener);

  return chart;
};

const data = [
  [6, 11, 7, 6, 13, 6, 2, 3, 4, 3],
  [9, 11, 8, 7, 12, 6, 4, 5, 6, 6],
  [12, 16, 11, 14, 18, 10, 6, 8, 9, 9],
  [7, 14, 7, 12, 13, 7, 5, 6, 5, 9],
  [17, 21, 7, 12, 12, 10, 12, 12, 6, 5],
  [48, 27, 59, 49, 32, 60, 71, 67, 71, 68],
];

const getSumData = ({ index }) => {
  const resultData = new Array(10).fill(0);
  for (let i = 0; i <= index; i++) {
    for (let j = 0; j < resultData.length; j++) {
      resultData[j] += data[i][j];
    }
  }
  return resultData;
};

const getAllData = () => {
  const allSingleData = [];
  const sumData = [];
  for (let i = 0; i < data.length; i++) {
    allSingleData.push({
      ...dataTemplate[i],
      data: data[i],
      hidden: true,
    });
  }
  for (let i = 0; i < data.length; i++) {
    sumData.push({
      ...dataTemplate[i],
      data:
        i == data.length - 1
          ? new Array(10).fill(100)
          : getSumData({ index: i }),
    });
  }
  return allSingleData.concat(sumData);
};

const hideAllSingleData = (datasets) => {
  datasets.forEach((item, index) => {
    if (index >= data.length) {
      item.hidden = false;
    } else {
      item.hidden = true;
    }
  });
};

const dataTemplate = [
  {
    borderColor: "#9F4D00",
    pointBackgroundColor: "#9F4D00",
    backgroundColor: gradient1(ctx),
    fill: true,
    datalabels: {
      align: "bottom",
      anchor: "end",
      color: "#5B3408",
      formatter: function (value) {
        return value + "%"; // 顯示數據值
      },
    },
  },
  {
    borderColor: "#E46E00",
    pointBackgroundColor: "#E46E00",
    backgroundColor: gradient2(ctx),
    fill: true,
    datalabels: {
      align: "bottom",
      anchor: "end",
      color: "#5B3408",
      formatter: function (value) {
        return value + "%"; // 顯示數據值
      },
    },
  },
  {
    borderColor: "#FE7A00",
    pointBackgroundColor: "#FE7A00",
    backgroundColor: gradient3(ctx),
    fill: true,
    datalabels: {
      align: "bottom",
      anchor: "end",
      color: "#5B3408",
      formatter: function (value) {
        return value + "%"; // 顯示數據值
      },
    },
  },
  {
    borderColor: "#FCAA5B",
    pointBackgroundColor: "#FCAA5B",
    backgroundColor: gradient4(ctx),
    fill: true,
    datalabels: {
      align: "bottom",
      anchor: "end",
      color: "#5B3408",
      formatter: function (value) {
        return value + "%"; // 顯示數據值
      },
    },
  },
  {
    borderColor: "#FFCC9B",
    pointBackgroundColor: "#FFCC9B",
    backgroundColor: gradient5(ctx),
    fill: true,
    datalabels: {
      align: "bottom",
      anchor: "end",
      color: "#5B3408",
      formatter: function (value) {
        return value + "%"; // 顯示數據值
      },
    },
  },
  {
    borderColor: "#FFCC9B",
    pointBackgroundColor: "#FFCC9B",
    backgroundColor: gradient5(ctx),
    fill: true,
    datalabels: {
      align: "bottom",
      anchor: "end",
      color: "#5B3408",
      formatter: function (value) {
        return value + "%"; // 顯示數據值
      },
    },
  },
];
