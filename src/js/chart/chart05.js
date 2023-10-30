import Chart from "chart.js/auto";
import { gradient11 } from './color'
import onResize from './on-resize'

const ctx = document.getElementById("05_chart").getContext("2d");
export default () =>
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                ["Energy"],
                ["Health&", "Biotech"],
                ["Hardware"],
                ["IT&", "Software"],
                ["Manufacturing"],
                ["Transportation"],
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
            onResize,
            scales: {
                x: {
                    position: "top",
                    ticks: {
                        color: "#6D4E00",
                        paddingLeft: 100,
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