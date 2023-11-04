import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

new Swiper(".swiper", {
    modules: [Navigation, Autoplay],
    autoplay: {
        delay: 1500,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
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