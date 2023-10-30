import Chart from "chart.js/auto";
import onResize from "./on-resize";
import { orangeGradient, blueGradient } from './color'

const ctx = document.getElementById('07_02_chart').getContext("2d")

export default () =>
    new Chart(
        ctx, {
        type: "bar",
        data: {
            labels: ["Energy", "Health and Biotech", "Hardware", "Manufacturing"],
            datasets: [
                {
                    axis: "y",
                    label: 'Amount($M USD)',
                    data: [24.56, 13.92, 11.41, 5.16].map((x) => x * (400 / 25)),
                    backgroundColor: orangeGradient(ctx),
                    datalabels: {
                        color: '#fff',
                        formatter: (value) => value / (400 / 25)
                    },
                },
                {
                    axis: "y",
                    label: 'Deals',
                    data: [227, 333, 326, 219].map(x => -x),
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
                                return value / (400 / 25)
                            }
                            return Math.abs(value)
                        },
                    },
                    min: -400,
                    max: 400,
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