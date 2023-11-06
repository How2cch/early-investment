import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const swiper = new Swiper(".swiper", {
    modules: [Navigation, Autoplay],
    autoplay: {
        delay: 1500,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    }
    ,
    loop: true,
    slidesPerView: 2,
    spaceBetween: 14,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
        },
        // 1440: {
        //   slidesPerView: 6,
        // },
    },
});

swiper.autoplay.stop();

const lastElement = document.querySelector(".swiper");

window.addEventListener("scroll", checkIfLastElementVisible);

function checkIfLastElementVisible() {
    const scrollY = window.scrollY || window.pageYOffset;
    const lastElementRect = lastElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const lastElementBottom = lastElementRect.top + scrollY + lastElementRect.height;
    const isVisible = lastElementBottom <= scrollY + windowHeight
    if (isVisible) startAutoPlay();
}

function startAutoPlay() {
    window.removeEventListener("scroll", checkIfLastElementVisible);
    setTimeout(() => {
        swiper.autoplay.start();
    }, 1000)
}

checkIfLastElementVisible();
