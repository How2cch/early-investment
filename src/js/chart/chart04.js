import Chart from "chart.js/auto";
import {
  gradient6,
  gradient7,
  gradient8,
  gradient9,
  gradient10,
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

  const radio_02_btns = document.querySelectorAll("#btn_radio_02 button");
  radio_02_btns.forEach((button, index) => {
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
  });
};

const data = [
  [47, 53, 53, 45, 58, 49, 33, 34, 42],
  [21, 18, 21, 17, 18, 17, 19, 19, 23],
  [15, 13, 13, 16, 13, 14, 14, 16, 15],
  [5, 7, 5, 8, 5, 6, 7, 7, 5],
  [8, 7, 3, 5, 3, 5, 11, 9, 4],
  [4, 3, 5, 8, 3, 9, 16, 16, 10],
];



const chartColor = [
  "#B0D1E04A",
  "#A7D1E5B2",
  "#80C1DFB2",
  "#5AABD1B2",
  "#1F88B7B2",
  "#216889B2",
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
    if (i == data.length - 1) continue;
    sumData.push({
      ...dataTemplate[i],
      data: getSumData({ index: i }),
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
    borderColor: "#39738E",
    pointBackgroundColor: "#39738E",
    backgroundColor: gradient6(ctx),
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
    borderColor: "#C8E3EF",
    pointBackgroundColor: "#C8E3EF",
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
    borderColor: "#C8E3EF",
    pointBackgroundColor: "#C8E3EF",
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
    borderColor: "#80B6CF",
    pointBackgroundColor: "#80B6CF",
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
    borderColor: "#B0D1E04A",
    pointBackgroundColor: "#B0D1E04A",
    backgroundColor: gradient7(ctx),
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