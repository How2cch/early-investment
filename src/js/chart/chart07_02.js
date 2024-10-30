import Chart from "chart.js/auto";
import onResize from "./on-resize";
import { orangeGradient, blueGradient } from './color'
import { formatNumber } from "../utils/helper";

const ctx = document.getElementById('07_02_chart').getContext("2d")

export default () =>
    new Chart(
        ctx, {
        type: "bar",
        data: {
            labels: ["Health and Biotech", "Hardware", "Energy", "Manufacturing"],
            datasets: [
                {
                    axis: "y",
                    label: 'Amount($M USD)',
                    data: [1790, 1450, 3320, 748].map((x) => x * (4 / 25)),
                    backgroundColor: orangeGradient(ctx),
                    datalabels: {
                        color: '#6D4E00',
                        formatter: (value) => formatNumber(value / (4 / 25))
                    },
                },
                {
                    axis: "y",
                    label: 'Deals',
                    data: [404, 393, 317, 264].map(x => -x),
                    backgroundColor: blueGradient(ctx),
                    datalabels: {
                        color: '#fff',
                        // formatter: Math.abs
                        formatter: (value) => Math.abs(value)
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
                                return formatNumber(value * 6.25)
                            }
                            return Math.abs(value)
                        },
                    },
                    min: -500, // 設定最小值
                    max: 600, // 設定最大值
                    stacked: true,
                    afterBuildTicks: (axis) => {
                        axis.ticks = [
                            { value: -500, label: '500' },
                            { value: -250, label: '250' },
                            { value: 0, label: '0' },
                            { value: 200, label: '1250' },
                            { value: 400, label: '2500' },
                            { value: 600, label: '3750' },
                        ];
                    },

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