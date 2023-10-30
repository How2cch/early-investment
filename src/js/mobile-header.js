const mobileHeader = document.querySelector("#mobileHeader");
const anchorNavContainer = document.querySelector("#anchorNavContainer");
window.addEventListener("scroll", function () {
    const windowWidth = window.innerWidth;
    const scrollDistance = window.scrollY || document.documentElement.scrollTop;
    if (scrollDistance > 200) {
        mobileHeader.classList.add("bg-white", "shadow-lg");
    } else {
        mobileHeader.classList.remove("bg-white", "shadow-lg");
    }

    if (windowWidth >= 768) {
        if (scrollDistance > 1000) {
            anchorNavContainer.classList.remove("-translate-y-full");
        } else {
            anchorNavContainer.classList.add("-translate-y-full");
        }
    }
});