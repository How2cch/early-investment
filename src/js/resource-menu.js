const resourceMenuBtn = document.querySelector("#resourceMenuBtn");
const resourceMenu = document.querySelector("#resourceMenu");
const resource_arrow = document.querySelector("#resource_arrow");
let resourceButtonClicked = false;

resourceMenuBtn.addEventListener("click", () => {
    // 設置標記為 true，表示按鈕被點擊
    resourceButtonClicked = true;

    resourceMenu.classList.toggle("active");
    resource_arrow.classList.toggle("rotate-180");
});

document.addEventListener("click", (e) => {
    // 判斷點擊是否在彈出區塊或按鈕外部
    if (!resourceMenu.contains(e.target) && e.target !== resourceMenuBtn) {
        // 判斷這次事件是否由按鈕觸發
        if (!resourceButtonClicked) {
            resourceMenu.classList.remove("active");
            resource_arrow.classList.remove("rotate-180");
        }
    }

    // 重設標記為 false
    resourceButtonClicked = false;
});

const resource_menu_02_toggler = document.querySelector(
    "#resource_menu_02_toggler"
);
const resource_menu_02_list = document.querySelector("#resource_menu_02_list");
const resource_menu_02_arrow = document.querySelector(
    "#resource_menu_02_arrow"
);

resource_menu_02_toggler.addEventListener("click", () => {
    resource_menu_02_arrow.classList.toggle("rotate-180");
    if (resource_menu_02_list.style.maxHeight) {
        resource_menu_02_list.style.maxHeight = null;
    } else {
        resource_menu_02_list.style.maxHeight =
            resource_menu_02_list.scrollHeight + "px";
    }
});
