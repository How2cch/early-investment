const radio_03_btns = document.querySelectorAll("#btn_radio_03 button");
radio_03_btns.forEach((button, index) => {
    button.addEventListener("click", () => {
        radio_03_btns.forEach((btn) => {
            btn.classList.remove("active_brown");
        });

        button.classList.add("active_brown");

        button.closest('[data-select]').setAttribute('data-select', index)
    });
});