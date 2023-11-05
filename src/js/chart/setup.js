import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

import init01 from "./chart01";
import init02 from "./chart02";
import init03 from "./chart03";
import init04 from "./chart04";
import init05 from "./chart05";
import init06 from "./chart06";
import init07_01 from "./chart07_01";
import init07_02 from "./chart07_02";
import init07_03 from "./chart07_03";
import init07_04 from "./chart07_04";
import init07_05 from "./chart07_05";

Chart.register(ChartDataLabels);

// 圖表全域設定
Chart.defaults.plugins.legend = false;
Chart.defaults.font.family = "KronaOne-Regular";
Chart.defaults.font.size = 8;
Chart.defaults.elements.bar.borderRadius = 9999;
Chart.defaults.animation.duration = 1000;
Chart.defaults.animation.easing = "easeInOutCubic";

export const chartMap = new Map([
    ["chart_01", null],
    ["chart_02", null],
    ["chart_03", null],
    ["chart_04", null],
    ["chart_05", null],
    ["chart_06", null],
    ["chart_07", null],
    ["chart_07_01", null],
    ["chart_07_02", null],
    ["chart_07_03", null],
    ["chart_07_04", null],
    ["chart_07_05", null],
]);

// 使用IntersectionObserver加載圖表
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const chartId = entry.target.getAttribute("id");

            if (chartId === "01_chart") {
                const chart = init01();
                chartMap.set("chart_01", chart);
            }
            if (chartId === "02_chart") {
                const chart = init02();
                chartMap.set("chart_02", chart);
            }
            if (chartId === "03_chart") {
                const chart = init03();
                chartMap.set("chart_03", chart);
            }
            if (chartId === "04_chart") {
                const chart = init04();
                chartMap.set("chart_04", chart);
            }
            if (chartId === "05_chart") {
                const chart = init05();
                chartMap.set("chart_05", chart);
            }
            if (chartId === "06_chart") {
                const chart = init06();
                chartMap.set("chart_06", chart);
            }
            if (chartId === "07_01_chart") {
                const chart = init07_01();
                chartMap.set("chart_07_01", chart);
            }
            if (chartId === "07_02_chart") {
                const chart = init07_02();
                chartMap.set("chart_07_02", chart);
            }
            if (chartId === "07_03_chart") {
                const chart = init07_03();
                chartMap.set("chart_07_03", chart);
            }
            if (chartId === "07_04_chart") {
                const chart = init07_04();
                chartMap.set("chart_07_04", chart);
            }
            if (chartId === "07_05_chart") {
                const chart = init07_05();
                chartMap.set("chart_07_05", chart);
            }

            observer.unobserve(entry.target);
        }
    });
});

const chartCanvases = document.querySelectorAll("canvas");
chartCanvases.forEach((chart) => {
    observer.observe(chart);
});
