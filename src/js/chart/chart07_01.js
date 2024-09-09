import Chart from "chart.js/auto";
import onResize from "./on-resize";
import { orangeGradient } from "./color";

const ctx = document.getElementById("07_01_chart").getContext("2d")

const onResize07 = (chart) => {
    const windowWidth = window.innerWidth
    let pointRadius
    if (windowWidth >= 768 && windowWidth < 1440) {
        pointRadius = 16
    } else if (windowWidth >= 1440) {
        pointRadius = 16
    } else {
        pointRadius = 10
    }
    chart.data.datasets.forEach(function (dataset) {
        dataset.pointRadius = pointRadius
        dataset.pointHoverRadius = pointRadius
    })

    // 重新渲染圖表
    chart.update()
}



export default () =>
    new Chart(document.getElementById('07_01_chart').getContext("2d"), {
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
            datasets: [
                {
                    data: [22, 38, 38, 65, 48, 33, 60, 58, 29],
                    borderColor: "#A0CFFC",
                    pointBackgroundColor: "#A0CFFC",
                    datalabels: {
                        color: "#fff",
                    },
                },
                {
                    data: [39, 37, 22, 34, 86, 75, 49, 70, 45],
                    borderColor: "#4382A0",
                    pointBackgroundColor: "#4382A0",
                    datalabels: {
                        color: "#fff",
                    },
                },
                {
                    data: [96, 128, 109, 130, 184, 130, 163, 150, 142],
                    borderColor: "#FF7B01",
                    pointBackgroundColor: "#FF7B01",
                    datalabels: {
                        color: "#fff",
                    },
                },
                {
                    data: [179, 194, 181, 185, 244, 253, 291, 312, 384],
                    borderColor: "#FFC11C",
                    pointBackgroundColor: "#FFC11C",
                    datalabels: {
                        color: "#D86800",
                    },
                },
                {
                    data: [null, null, null, null, null, null, null, null, null, 5],
                    borderColor: "#A0CFFC",
                    pointBackgroundColor: "#FFF",
                    borderDashOffset: 10,
                    pointBorderWidth: 5,
                    datalabels: {
                        color: "#A0CFFC",
                    },
                },
                {
                    data: [null, null, null, null, null, null, null, null, null, 19],
                    borderColor: "#4382A0",
                    pointBackgroundColor: "#FFF",
                    borderDashOffset: 10,
                    pointBorderWidth: 5,
                    datalabels: {
                        color: "#4382A0",
                    },
                },
                {
                    data: [null, null, null, null, null, null, null, null, null, 28],
                    borderColor: "#FF7B01",
                    pointBackgroundColor: "#FFF",
                    borderDashOffset: 10,
                    pointBorderWidth: 5,
                    datalabels: {
                        color: "#FF7B01",
                    },
                },
                {
                    data: [null, null, null, null, null, null, null, null, null, 82],
                    borderColor: "#FFC11C",
                    pointBackgroundColor: "#FFF",
                    borderDashOffset: 10,
                    pointBorderWidth: 5,
                    datalabels: {
                        color: "#FFC11C",
                    },
                },
            ],
        },
        options: {
            pointRadius: 10,
            pointHoverRadius: 10,
            onResize: function (chart) {
                onResize(chart)
                onResize07(chart)
            },
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
                        color: "#6D4E00",
                        padding: 10,
                    },
                    min: 0,
                    max: 450,
                    beginAtZero: true,
                },
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        color: "#6D4E00",
                    },
                },
            },
        },
    });


    