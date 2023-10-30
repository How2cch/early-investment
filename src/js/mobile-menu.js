const mobileMenuToggler = document.querySelector("#mobileMenuToggler");
const mobileMenu = document.querySelector("#mobileMenu");
const mobileMenuClose = document.querySelector("#mobileMenuClose");
mobileMenuToggler.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});
mobileMenuClose.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});
const menuButtons = document.querySelectorAll(".menu_btn");
menuButtons.forEach((button) => {
    button.addEventListener("click", function () {
        if (
            button.id === "menu_02_toggler" ||
            button.id === "mobile_menu_02_toggler"
        )
            return;
        if (document.body.clientWidth < 768) {
            mobileMenu.classList.toggle("active");
        } else {
            headerMenu.classList.toggle("active");
            header_arrow.classList.toggle("rotate-180");
        }
    });
});

const mobile_menu_02_toggler = document.querySelector(
    "#mobile_menu_02_toggler"
);
const mobile_menu_02_list = document.querySelector("#mobile_menu_02_list");
const mobile_menu_02_arrow = document.querySelector("#mobile_menu_02_arrow");

mobile_menu_02_toggler.addEventListener("click", () => {
    mobile_menu_02_arrow.classList.toggle("rotate-180");
    if (mobile_menu_02_list.style.maxHeight) {
        mobile_menu_02_list.style.maxHeight = null;
    } else {
        mobile_menu_02_list.style.maxHeight =
            mobile_menu_02_list.scrollHeight + "px";
    }
});
