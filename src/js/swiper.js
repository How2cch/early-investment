import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

new Swiper(".swiper", {
    modules: [Navigation],
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