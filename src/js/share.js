const shareLinkedInButtons = document.querySelectorAll(".radio_03_btns");
shareLinkedInButtons.forEach((button) => {
    button.addEventListener("click", function () {
        window.open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${currentURL}`,
            "_blank",
            "noopener,noreferrer"
        );
    });
});

const shareFBButtons = document.querySelectorAll(".shareFB");

shareFBButtons.forEach((button) => {
    button.addEventListener("click", function () {
        window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`,
            "_blank",
            "noopener,noreferrer"
        );
    });
});

const shareTwitterButtons = document.querySelectorAll(".shareTwitter");
shareTwitterButtons.forEach((button) => {
    button.addEventListener("click", function () {
        window.open(
            `https://twitter.com/intent/tweet?url=${currentURL}&text=Check%20this%20out!`,
            "_blank",
            "noopener,noreferrer"
        );
    });
});

const closeShareElements = document.querySelectorAll(".closeShare");
closeShareElements.forEach((element) => {
    element.addEventListener("click", function (event) {
        // 從 event 對象或元素本身找到最近的帶有 'data-id' 屬性的父元素
        const parent = event.target.closest("[data-id]");
        if (!parent) return;

        // 獲取 data-id 屬性的值
        const dataId = parent.getAttribute("data-id");

        // 使用 data-id 屬性找到相對應的 share_container
        const shareContainer = parent.querySelector(
            `[data-id="${dataId}"] .share_container`
        );
        if (!shareContainer) return;

        // 設定 share_container 的可見性為 'hidden'
        shareContainer.style.visibility = "hidden";
    });
});