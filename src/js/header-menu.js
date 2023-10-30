const headerMenuBtn = document.querySelector("#headerMenuBtn");
const headerMenu = document.querySelector("#headerMenu");
const header_arrow = document.querySelector("#header_arrow");
let buttonClicked = false;

headerMenuBtn.addEventListener("click", () => {
    // 設置標記為 true，表示按鈕被點擊
    buttonClicked = true;

    headerMenu.classList.toggle("active");
    header_arrow.classList.toggle("rotate-180");
});

document.addEventListener("click", (e) => {
    // 判斷點擊是否在彈出區塊或按鈕外部
    if (!headerMenu.contains(e.target) && e.target !== headerMenuBtn) {
        // 判斷這次事件是否由按鈕觸發
        if (!buttonClicked) {
            headerMenu.classList.remove("active");
            header_arrow.classList.remove("rotate-180");
        }
    }

    // 重設標記為 false
    buttonClicked = false;
});
