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

const onResize04 = (chart) => {
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
        "2023",
        "2024 Q1",
      ],
      datasets: getAllData(),
    },
    options: {
      maintainAspectRatio: false,
      onResize: (chart) => onResize04(chart),
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
            maxRotation: 0, 
            minRotation: 0, 
            autoSkip: false,
            maxTicksLimit: 9,
          },
        },
      },
    },
  });
  const popoverBtn = document.querySelector('[data-id="chart_04"]');
  popoverBtn.setAttribute('data-id', 'chart_04_sum')

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
        popoverBtn.setAttribute('data-id', 'chart_04_sum')
      } else {
        datasets[index - 1].hidden = false;
        popoverBtn.setAttribute('data-id', `chart_04_0${index}`)
      }

      chart.update();
    });
  }
  const radio_02_btns = document.querySelectorAll("#btn_radio_02 button");
  const radio_02_btns_mobile = document.querySelectorAll("#btn_radio_02_mobile button");
  
  radio_02_btns.forEach(btnEventListener);
  radio_02_btns_mobile.forEach(btnEventListener);

  return chart;

};

const data = [
  [44, 49, 49, 41, 53, 44, 29, 31, 31, 27],
  [20, 16, 19, 15, 17, 15, 17, 17, 21, 17],
  [14, 12, 12, 15, 12, 12, 12, 14, 16, 16],
  [8,   9,  6,  8,  7,  7, 10,  9,  9, 17],
  [4,   3,  2,  4,  2,  2,  7,  5,  3,  8],
  [4,   4,  5,  8,  9,  9, 14, 14, 13, 12],
];

const textColor = "#39738E";

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
  for (let i = 0; i < data.length ; i++) {
    sumData.push({
      ...dataTemplate[i],
      data: i == data.length - 1 ? new Array(10).fill(100) : getSumData({ index: i }),
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