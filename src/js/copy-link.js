const copyLinkBtn = document.querySelectorAll(".copyLinkBtn");
copyLinkBtn.forEach((button) => {
    button.addEventListener("click", function () {
        // 使用 Clipboard API 將 currentURL 複製到剪貼簿
        navigator.clipboard
            .writeText(currentURL)
            .then(() => {
                console.log("URL copied to clipboard");
            })
            .catch((err) => {
                console.error("Could not copy text: ", err);
            });
    });
});