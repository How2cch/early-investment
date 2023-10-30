const dialog = document.getElementById("resourceDialog");

const openDialogBtns = document.querySelectorAll(".openResourceDialog");

openDialogBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        dialog.classList.add("!visible", "!opacity-100");
    });
});

document
    .getElementById("closeResourceDialog")
    .addEventListener("click", function () {
        dialog.classList.remove("!visible", "!opacity-100");
    });