import Chart from "chart.js/auto";
import onResize from "./on-resize";
import { orangeGradient, blueGradient } from './color'

const ctx = document.getElementById('07_05_chart').getContext("2d")

export default () =>
    new Chart(
        ctx, {
        type: "bar",
        data: {
            labels: ["IT & Software", "Health and Biotech", "Hardware", 'Media & Entertainment', 'Financial Services'],
            datasets: [
                {
                    axis: "y",
                    label: 'Amount($M USD)',
                    data: [2.69, 4.69, 4.35, 2.37, 1.30].map((x) => x * (80 / 5)),
                    backgroundColor: orangeGradient(ctx),
                    datalabels: {
                        color: '#fff',
                        formatter: (value) => value / (80 / 5)
                    },
                },
                {
                    axis: "y",
                    label: 'Deals',
                    data: [59, 43, 37, 30, 22].map((x) => -x),
                    backgroundColor: blueGradient(ctx),
                    datalabels: {
                        color: '#fff',
                        formatter: Math.abs
                    },
                }
            ],
        },
        options: {
            onResize,
            maxBarThickness: 30,
            indexAxis: "y",
            plugins: {
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            context.formattedValue =
                                context.dataset.datalabels.formatter(Number(context.formattedValue))
                        },
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        callback: function (value) {
                            if (Math.sign(value) > 0) {
                                return value / (80 / 5)
                            }
                            return Math.abs(value)
                        },
                    },
                    min: -80,
                    max: 80,
                    stacked: true,
                },
                y: {
                    ticks: {
                        display: false
                    },
                    grid: {
                        display: false,
                    },
                    stacked: true
                }
            }
        },
    });