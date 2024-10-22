import { data } from "autoprefixer";

const popupoverBtns = document.querySelectorAll(".popupover_btn");

const downloadImageMap = {
    "chart_01_current": "chart_chart_01_current.png",
    "chart_01_future": "chart_chart_01_future.png",
    "chart_02": "chart_chart_02.png",
    "chart_03_sum": "chart_chart_03_sum.png",
    "chart_03_01": "chart_chart_03_01.png",
    "chart_03_02": "chart_chart_03_02.png",
    "chart_03_03": "chart_chart_03_03.png",
    "chart_03_04": "chart_chart_03_04.png",
    "chart_03_05": "chart_chart_03_05.png",
    "chart_03_06": "chart_chart_03_06.png",
    "chart_04_sum": "chart_chart_04_sum.png",
    "chart_04_01": "chart_chart_04_01.png",
    "chart_04_02": "chart_chart_04_02.png",
    "chart_04_03": "chart_chart_04_03.png",
    "chart_04_04": "chart_chart_04_04.png",
    "chart_04_05": "chart_chart_04_05.png",
    "chart_04_06": "chart_chart_04_06.png",
    "chart_05": "chart_chart_05.png",
    "chart_06": "chart_chart_06.png",
    "chart_07_01": "chart_chart_07_01.png",
    "chart_07_02": "chart_chart_07_02.png",
    "chart_07_03": "chart_chart_07_03.png",
    "chart_07_04": "chart_chart_07_04.png",
    "chart_07_05": "chart_chart_07_05.png",
    "chart_img_01": "chart_img_01.png",
    "chart_img_02": "chart_img_02.png",
};

popupoverBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
        const parent = event.target.closest(".popover_container");
        if (!parent) return;

        const shareContainer = parent.querySelector(".share_container");
        const dataId = parent.getAttribute("data-id");

        if (btn.classList.contains("download")) {
            let imagePath;
            if (dataId) imagePath = downloadImageMap[dataId];

            if (!imagePath) return;
            const baseURL = `${window.location.origin}/2024`;
            const imageURL = `${baseURL}/${imagePath}`;
            const link = document.createElement("a");
            link.href = imageURL;
            link.download = `${dataId}.png`;
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
                    shareContainer.style.display = "none";
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