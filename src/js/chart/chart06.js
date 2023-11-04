import Chart from "chart.js/auto";
import { gradient13 } from './color'
import onResize from './on-resize'

const ctx = document.getElementById("06_chart").getContext("2d");
const onResize06 = (chart) => {
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
                ["Health and", "Biotech"],
                "Hardware",
                "Manufacturing",
                "Energy",
                ["IT and", "Software"],
                ["Media and", "Entertainment"],
            ],
            datasets: [
                {
                    data: [563, 459, 276, 252, 244, 152],
                    backgroundColor: gradient13(ctx),
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
            onResize: (chart) => onResize06(chart),
            scales: {
                x: {
                    position: "top",
                    ticks: {
                        color: "#39738E",
                    },
                },
                y: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        color: "#39738E",
                        paddingLeft: 200,
                    },
                },
            },
        },
    });