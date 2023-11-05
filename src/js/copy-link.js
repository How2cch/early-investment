import { copyText } from "./utils/copy";
import { Toast, toastOptions } from "./utils/messagePopup";


const copyLinkBtn = document.querySelectorAll(".copyLinkBtn");
copyLinkBtn.forEach((button) => {
    button.addEventListener("click", function () {
        // 使用 Clipboard API 將 currentURL 複製到剪貼簿
        const currentURL = document.location.href;
        const successMsg = 'URL copied to clipboard.';
        copyText(currentURL)
            .then(() => Toast.fire(toastOptions.success(successMsg)))
            .catch((errorMsg) => Toast.fire(toastOptions.error(errorMsg)));
    });
});