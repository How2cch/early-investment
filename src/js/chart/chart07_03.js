import Chart from "chart.js/auto";
import onResize from "./on-resize";
import { orangeGradient, blueGradient } from './color'
import { formatNumber } from "../utils/helper";

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
                    data: [1425, 586, 377, 284, 147].map((x) => x / 15 * 3),
                    backgroundColor: orangeGradient(ctx),
                    datalabels: {
                        color: '#6D4E00',
                        formatter: (value) => formatNumber(value / 3 * 15)
                    },
                },
                {
                    axis: "y",
                    label: 'Deals',
                    data: [291, 155, 118, 68, 62].map((x) => -x),
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
                                return formatNumber((value / 1 * 5))
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