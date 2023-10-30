const link_text = document.querySelectorAll(".link_text");
// 獲取當前網址
const currentURL = document.location.href;
// 遍歷每一個 .link_text 元素並插入當前網址
link_text.forEach((element) => {
    element.textContent = currentURL;
});