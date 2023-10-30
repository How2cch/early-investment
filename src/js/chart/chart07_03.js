import Chart from "chart.js/auto";
import onResize from "./on-resize";
import { orangeGradient, blueGradient } from './color'

const ctx = document.getElementById('07_03_chart').getContext("2d")

export default () =>
    new Chart(
        ctx, {
        type: "bar",
        data: {
            labels: ["Health and Biotech", "IT & Software", "Hardware", 'Manufacturing', 'Media & Entertainment'],
            datasets: [
                {
                    axis: "y",
                    label: 'Amount($M USD)',
                    data: [24.56, 3.77, 5.68, 1.47, 2.84].map((x) => x * (400 / 25)),
                    backgroundColor: orangeGradient(ctx),
                    datalabels: {
                        color: '#fff',
                        formatter: (value) => (value / (400 / 25)).toFixed(2)
                    },
                },
                {
                    axis: "y",
                    label: 'Deals',
                    data: [242, 103, 129, 62, 68].map((x) => -x),
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