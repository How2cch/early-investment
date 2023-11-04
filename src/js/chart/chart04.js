import Chart from "chart.js/auto";
import {
  gradient6,
  gradient10,
  gradient9,
  gradient8,
  gradient7,
  gradient11,
} from "./color";
import onResize from "./on-resize";

const ctx = document.getElementById("04_chart").getContext("2d");
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
        "2023 Q1",
      ],
      datasets: getAllData(),
    },
    options: {
      maintainAspectRatio: false,
      onResize,
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
            color: "#39738E",
            padding: 10,
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
            color: "#39738E80",
          },
        },
      },
    },
  });

  const btnEventListener = (button, index) => {
    button.addEventListener("click", () => {
      radio_02_btns.forEach((btn) => {
        btn.classList.remove("active_blue");
      });

      button.classList.add("active_blue");
      const datasets = chart.data.datasets;
      datasets.forEach((item) => {
        item.hidden = true;
      });

      if (index === 0) {
        hideAllSingleData(datasets);
      } else {
        datasets[index - 1].hidden = false;
      }

      chart.update();
    });
  }
  const radio_02_btns = document.querySelectorAll("#btn_radio_02 button");
  const radio_02_btns_mobile = document.querySelectorAll("#btn_radio_02_mobile button");
  
  radio_02_btns.forEach(btnEventListener);
  radio_02_btns_mobile.forEach(btnEventListener);
};

const data = [
  [47, 53, 53, 45, 58, 49, 33, 34, 42],
  [21, 18, 21, 17, 18, 17, 19, 19, 23],
  [15, 13, 13, 16, 13, 14, 14, 16, 15],
  [5, 7, 5, 8, 5, 6, 7, 7, 5],
  [8, 7, 3, 5, 3, 5, 11, 9, 4],
  [4, 3, 5, 8, 3, 9, 16, 16, 10],
];

const textColor = "#39738E";

const getSumData = ({ index }) => {
  const resultData = new Array(9).fill(0);
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
  for (let i = 0; i < data.length ; i++) {
    sumData.push({
      ...dataTemplate[i],
      data: i == data.length - 1 ? new Array(9).fill(100) : getSumData({ index: i }),
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
    borderColor: "rgba(0, 68, 100, .3)",
    pointBackgroundColor: "rgba(0, 68, 100, .3)",
    backgroundColor: gradient6(ctx),
    fill: true,
    datalabels: {
      align: "bottom",
      anchor: "end",
      color: "rgba(0, 68, 100, .6)",
      formatter: function (value) {
        return value + "%"; // 顯示數據值
      },
    },
  },
  {
    borderColor: "rgba(15, 91, 126, 0.3)",
    pointBackgroundColor: "rgba(15, 91, 126, 0.3)",
    backgroundColor: gradient7(ctx),
    fill: true,
    datalabels: {
      align: "bottom",
      anchor: "end",
      color: "#39738E",
      formatter: function (value) {
        return value + "%"; // 顯示數據值
      },
    },
  },
  {
    borderColor: "rgba(113, 166, 190, 0.6)",
    pointBackgroundColor: "rgba(113, 166, 190, 0.6)",
    backgroundColor: gradient8(ctx),
    fill: true,
    datalabels: {
      align: "bottom",
      anchor: "end",
      color: "#39738E",
      formatter: function (value) {
        return value + "%"; // 顯示數據值
      },
    },
  },
  {
    borderColor: "rgba(122, 182, 210, 0.6)",
    pointBackgroundColor: "rgba(122, 182, 210, 0.6)",
    backgroundColor: gradient9(ctx),
    fill: true,
    datalabels: {
      align: "bottom",
      anchor: "end",
      color: "#39738E",
      formatter: function (value) {
        return value + "%"; // 顯示數據值
      },
    },
  },
  {
    borderColor: "rgba(161, 202, 221, 0.6)",
    pointBackgroundColor: "rgba(161, 202, 221, 0.6)",
    backgroundColor: gradient10(ctx),
    fill: true,
    datalabels: {
      align: "bottom",
      anchor: "end",
      color: "#39738E",
      formatter: function (value) {
        return value + "%"; // 顯示數據值
      },
    },
  },
  {
    borderColor: "rgba(213, 231, 241, 0.6)",
    pointBackgroundColor: "rgba(213, 231, 241, 0.6)",
    backgroundColor: gradient11(ctx),
    fill: true,
    datalabels: {
      align: "bottom",
      anchor: "end",
      color: textColor,
      formatter: function (value) {
        return value + "%"; // 顯示數據值
      },
    },
  },
];