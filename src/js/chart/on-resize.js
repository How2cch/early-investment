import Chart from "chart.js/auto";

// 改變圖表文字大小
export default (chart) => {
    const windowWidth = window.innerWidth;
    let fontSize;
    if (windowWidth >= 768 && windowWidth < 1440) {
        fontSize = 10;
    } else if (windowWidth >= 1440) {
        fontSize = 16;
    } else {
        fontSize = 8;
    }
    Chart.defaults.font.size = fontSize;

    // 重新渲染圖表
    chart.update();
};