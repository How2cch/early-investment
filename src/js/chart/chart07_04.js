import Chart from "chart.js/auto";
import onResize from "./on-resize";
import { orangeGradient, blueGradient } from './color'

const ctx = document.getElementById('07_04_chart').getContext("2d")

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
                    data: [3.76, 0.3562, 2.04, 0.5808, 0.7063].map((x) => x * (200 / 4)),
                    backgroundColor: orangeGradient(ctx),
                    datalabels: {
                        color: '#fff',
                        formatter: (value) => (value / (200 / 4)).toFixed(2)
                    },
                },
                {
                    axis: "y",
                    label: 'Deals',
                    data: [104, 30, 60, 26, 30].map((x) => -x),
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
                                return value / (200 / 4)
                            }
                            return Math.abs(value)
                        },
                    },
                    min: -200,
                    max: 200,
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