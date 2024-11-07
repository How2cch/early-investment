import { data } from "autoprefixer";

const popupoverBtns = document.querySelectorAll(".popupover_btn");

const downloadImageMap = {
    "chart_01_current": "01.png",
    "chart_01_future": "",
    "chart_02": "02.png",
    "chart_03_sum": "11.png",
    "chart_03_01": "12.png",
    "chart_03_02": "13.png",
    "chart_03_03": "14.png",
    "chart_03_04": "15.png",
    "chart_03_05": "16.png",
    "chart_03_06": "17.png",
    "chart_03_07": "18.png",
    "chart_04_sum": "03.png",
    "chart_04_01": "04.png",
    "chart_04_02": "05.png",
    "chart_04_03": "06.png",
    "chart_04_04": "07.png",
    "chart_04_05": "08.png",
    "chart_04_06": "09.png",
    "chart_04_07": "10.png",
    "chart_06": "19.png",
    "chart_img_01": "20.png",
    "chart_05": "21.png",
    "chart_img_02": "22.png",
    "chart_07_01": "23.png",
    "chart_07_02": "24.png",
    "chart_07_03": "25.png",
    "chart_07_04": "26.png",
    "chart_07_05": "27.png",
};

const imageDownloadNameMap = {
    "01.png": "01",
    "02.png": "02",
    "03.png": "03",
    "04.png": "04",
    "05.png": "05",
    "06.png": "06",
    "07.png": "07",
    "08.png": "08",
    "09.png": "09",
    "10.png": "10",
    "11.png": "11",
    "12.png": "12",
    "13.png": "13",
    "14.png": "14",
    "15.png": "15",
    "16.png": "16",
    "17.png": "17",
    "18.png": "18",
    "19.png": "19",
    "20.png": "20",
    "21.png": "21",
    "22.png": "22",   
    "23.png": "23",
    "24.png": "24",
    "25.png": "25",
    "26.png": "26",
    "27.png": "27",
}

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
            link.download = `${imageDownloadNameMap[downloadImageMap[dataId]]}.png`;
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