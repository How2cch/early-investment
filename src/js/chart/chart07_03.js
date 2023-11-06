import Chart from "chart.js/auto";
import onResize from "./on-resize";
import { orangeGradient, blueGradient } from './color'

const ctx = document.getElementById('07_03_chart').getContext("2d")

export default () =>
    new Chart(
        ctx, {
        type: "bar",
        data: {
            labels: ["Health and Biotech", "Hardware", "IT and Software", 'Media and Entertainment', 'Manufacturing'],
            datasets: [
                {
                    axis: "y",
                    label: 'Amount($M USD)',
                    data: [14.25, 5.86, 3.77, 2.84, 1.47].map((x) => x / 15 * 300),
                    backgroundColor: orangeGradient(ctx),
                    datalabels: {
                        color: '#6D4E00',
                        formatter: (value) => (value / 300 * 15).toFixed(2)
                    },
                },
                {
                    axis: "y",
                    label: 'Deals',
                    data: [242, 129, 103, 68, 62].map((x) => -x),
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
                                return value / 100 * 5
                            }
                            return Math.abs(value)
                        },
                    },
                    min: -300,
                    max: 300,
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