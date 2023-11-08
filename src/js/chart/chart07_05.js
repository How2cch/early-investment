import Chart from "chart.js/auto";
import onResize from "./on-resize";
import { orangeGradient, blueGradient } from './color'
import { formatNumber } from "../utils/helper";

const ctx = document.getElementById('07_05_chart').getContext("2d")

export default () =>
    new Chart(
        ctx, {
        type: "bar",
        data: {
            labels: ["IT and Software", "Health and Biotech", "Hardware", 'Media and Entertainment', 'Financial Services'],
            datasets: [
                {
                    axis: "y",
                    label: 'Amount($M USD)',
                    data: [269, 469, 435, 237, 130].map((x) => x * (80 / 5) / 100),
                    backgroundColor: orangeGradient(ctx),
                    datalabels: {
                        color: '#6D4E00',
                        formatter: (value) => {
                            return formatNumber(value / (80 / 5) * 100, {rounding: true})
                        }
                    },
                },
                {
                    axis: "y",
                    label: 'Deals',
                    data: [59, 43, 37, 30, 22].map((x) => -x),
                    backgroundColor: blueGradient(ctx),
                    datalabels: {
                        color: '#fff',
                        formatter: (value) => {
                            return Math.abs(value)
                        } 
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
                                return formatNumber((value / (80 / 5) * 100))
                            }
                            return Math.abs(value)
                        },
                    },
                    min: -70,
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