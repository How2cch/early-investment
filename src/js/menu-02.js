const menu_02_toggler = document.querySelector("#menu_02_toggler");
const menu_02_list = document.querySelector("#menu_02_list");
const menu_02_arrow = document.querySelector("#menu_02_arrow");

menu_02_toggler.addEventListener("click", () => {
    menu_02_arrow.classList.toggle("rotate-180");
    if (menu_02_list.style.maxHeight) {
        menu_02_list.style.maxHeight = null;
    } else {
        menu_02_list.style.maxHeight = menu_02_list.scrollHeight + "px";
    }
});

