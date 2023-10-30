const popupoverBtns = document.querySelectorAll(".popupover_btn");

popupoverBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
        const parent = event.target.closest(".popover_container");
        if (!parent) return;

        const shareContainer = parent.querySelector(".share_container");
        const dataId = parent.getAttribute("data-id");

        if (btn.classList.contains("download")) {
            // 獲取 Chart.js 的實例
            let chartInstance;
            if (dataId === "chart_01") chartInstance = chart_01;
            else if (dataId === "chart_02") chartInstance = chart_02;
            else if (dataId === "chart_03") chartInstance = window.chart_03;
            else if (dataId === "chart_04") chartInstance = window.chart_04;
            else if (dataId === "chart_05") chartInstance = chart_05;
            else if (dataId === "chart_06") chartInstance = chart_06;
            else if (dataId === "chart_07") chartInstance = window.chart_07;
            else if (dataId === "chart_img_01") {
                // 圖片路徑為 src/assets/images/early_investment/03_chart2.svg
                // 如何下載
                const imageURL = "src/assets/images/early_investment/03_chart1.svg";
                const link = document.createElement("a");
                link.href = imageURL;
                link.download = "chart_img_01.svg";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else if (dataId === "chart_img_02") {
                // 圖片路徑為 src/assets/images/early_investment/03_chart2.svg
                // 如何下載
                const imageURL = "src/assets/images/early_investment/03_chart2.svg";
                const link = document.createElement("a");
                link.href = imageURL;
                link.download = "chart_img_02.svg";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
            if (!chartInstance) {
                return;
            }

            // 接下來，你可以使用 chartInstance 進行你需要的操作，例如下載圖表
            const imageURL = chartInstance.toBase64Image();
            const link = document.createElement("a");
            link.href = imageURL;
            link.download = `chart_${dataId}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            return;
        }

        if (btn.classList.contains("share")) {
            if (shareContainer) {
                if (getComputedStyle(shareContainer).visibility === "hidden") {
                    shareContainer.style.visibility = "visible";
                } else {
                    shareContainer.style.visibility = "hidden";
                }
            }
            return;
        }

        // 定位到 .popupover_list
        const popupoverList = parent.querySelector(".popupover_list");
        if (!popupoverList) return;

        // 切換 visibility
        if (getComputedStyle(popupoverList).visibility === "hidden") {
            popupoverList.style.visibility = "visible";
        } else {
            popupoverList.style.visibility = "hidden";
            shareContainer.style.visibility = "hidden";
        }
    });
});