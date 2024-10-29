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
            labels: ["IT and Software", "Health and Biotech", "Hardware", 'Media and Entertainment'],
            datasets: [
                {
                    axis: "y",
                    label: 'Amount($M USD)',
                    data: [276, 610, 491, 240].map((x) => x / 10),
                    backgroundColor: orangeGradient(ctx),
                    datalabels: {
                        color: '#6D4E00',
                        formatter: (value) => {
                            return formatNumber(value * 10, {rounding: true})
                        }
                    },
                },
                {
                    axis: "y",
                    label: 'Deals',
                    data: [62, 51, 38, 31].map((x) => -x),
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
                                return value * 10
                            }
                            return Math.abs(value)
                        },
                    },
                    min: -80,
                    max: 80,
                    stacked: true,
                    afterBuildTicks: (axis) => {
                        // axis.ticks = [
                            // { value: -500, label: '500' },
                            // { value: -250, label: '250' },
                            // { value: 0, label: '0' },
                            // { value: 200, label: '1250' },
                            // { value: 400, label: '2500' },
                            // { value: 600, label: '3750' },
                        // ];
                    }
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