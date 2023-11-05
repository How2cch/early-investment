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


// 使用IntersectionObserver加載圖表
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const chartId = entry.target.getAttribute("id");

            if (chartId === "01_chart") {
                init01();
            }
            if (chartId === "02_chart") {
                init02();
            }
            if (chartId === "03_chart") {
                init03();
            }
            if (chartId === "04_chart") {
                init04();
            }
            if (chartId === "05_chart") {
                init05();
            }
            if (chartId === "06_chart") {
                init06();
            }
            if (chartId === "07_01_chart") {
                init07_01();
            }
            if (chartId === "07_02_chart") {
                init07_02();
            }
            if (chartId === "07_03_chart") {
                init07_03();
            }
            if (chartId === "07_04_chart") {
                init07_04();
            }
            if (chartId === "07_05_chart") {
                init07_05();
            }

            observer.unobserve(entry.target);
        }
    });
});

const chartCanvases = document.querySelectorAll("canvas");
chartCanvases.forEach((chart) => {
    observer.observe(chart);
});
