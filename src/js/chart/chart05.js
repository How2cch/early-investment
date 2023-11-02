import Chart from "chart.js/auto";
import { gradient11 } from './color'
import onResize from './on-resize'

const ctx = document.getElementById("05_chart").getContext("2d");
const onResize05 = (chart) => {
    const windowWidth = window.innerWidth;
    let fontSize;
    fontSize = 5;
    if (windowWidth >= 400) fontSize = 6;
    if (windowWidth >= 480) fontSize = 8;
    if (windowWidth >= 768 && windowWidth < 1440) fontSize = 10;
    if (windowWidth >= 1440) fontSize = 16;
    
    Chart.defaults.font.size = fontSize;

    // 重新渲染圖表
    chart.update();
}
export default () =>
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                ["Energy"],
                ["Health and", "Biotech"],
                ["Hardware"],
                ["IT and", "Software"],
                ["Manufacturing"],
                ["Media and", "Entertainment"],
            ],
            datasets: [
                {
                    data: [2.64, 2.12, 1.39, 1.13, 0.65, 0.57],
                    backgroundColor: gradient11(ctx),
                    datalabels: {
                        align: "end",
                        anchor: "end",
                        offset: function () {
                            const width = window.innerWidth;
                            if (width < 768) return -35;
                            if (width < 1440) return -50;
                            return -80;
                        },
                        color: "#fff",
                    },
                },
            ],
        },
        options: {
            layout: {
                padding: {
                    right: 20,
                },
            },
            indexAxis: "y",
            barPercentage: 0.9, // 柱子寬度佔類別寬度的百分比
            categoryPercentage: 1,
            onResize: (chart) => onResize05(chart),
            scales: {
                x: {
                    position: "top",
                    ticks: {
                        color: "#6D4E00",
                    },
                },
                y: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        color: "#6D4E00",
                        paddingLeft: 100,
                    },
                },
            },
        },
    });