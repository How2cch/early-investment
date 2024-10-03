import Chart from "chart.js/auto";
import onResize from "./on-resize";
import { orangeGradient, blueGradient } from './color'
import { formatNumber } from "../utils/helper";

const ctx = document.getElementById('07_04_chart').getContext("2d")

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
                    data: [376, 204, 35.62, 70.63, 58.08].map((x) => x * (2 / 4)),
                    backgroundColor: orangeGradient(ctx),
                    datalabels: {
                        color: '#6D4E00',
                        formatter: (value) => {
                            const data = Number(formatNumber(value / (2 / 4), {decimalPlace: 2, rounding: true}))
                            const decimalKeep = data.toString().includes(".") ? 2 : 0;
                            return formatNumber(Number(data), {decimalPlace: decimalKeep, rounding: true})
                        }
                    },
                },
                {
                    axis: "y",
                    label: 'Deals',
                    data: [115, 65, 30, 30, 26].map((x) => -x),
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
                                return formatNumber((value / (2 / 4)))
                            }
                            return Math.abs(value)
                        },
                    },
                    min: -150,
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