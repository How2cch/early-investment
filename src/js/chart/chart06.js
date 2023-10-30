import Chart from "chart.js/auto";
import { gradient12 } from './color'
import onResize from './on-resize'

const ctx = document.getElementById("06_chart").getContext("2d");

export default () =>
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                ["Health&", "Biotech"],
                "Hardware",
                "Manufacturing",
                "Energy",
                ["IT&", "Software"],
                ["Media&", "Entertainment"],
            ],
            datasets: [
                {
                    data: [563, 459, 276, 252, 244, 152],
                    backgroundColor: gradient12(ctx),
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
            onResize,
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
                        paddingLeft: 100,
                    },
                },
            },
        },
    });