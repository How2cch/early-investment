import "aos/dist/aos.css";
import AOS from "aos";

AOS.init({
    once: true,
    duration: 1200,
});

// 獲取所有帶有data-scroll-target屬性的按鈕
const buttons = document.querySelectorAll("[data-scroll-target]");
buttons.forEach((button) => {
    button.addEventListener("click", function () {
        const targetId = button.getAttribute("data-scroll-target");
        const targetElement = document.getElementById(targetId);

        const offset = 80;

        if (targetElement) {
            const rect = targetElement.getBoundingClientRect();
            const absoluteTop = window.scrollY + rect.top - offset;
            window.scrollTo({
                top: absoluteTop,
                behavior: "smooth",
            });
        }
    });
});