let title = document.querySelectorAll(".accordion");
let arrow = document.querySelectorAll(".arrow");
let panel = document.querySelectorAll(".panel");

title.forEach((item) => {
    item.addEventListener("click", () => {
        if (item.classList.contains("accordionActive")) {
            item.classList.remove("accordionActive");
            item.firstElementChild.classList.remove("arrowActive");
            item.nextElementSibling.classList.remove("panelActive");
        } else {
            resetAll();
            item.classList.add("accordionActive");
            item.firstElementChild.classList.add("arrowActive");
            item.nextElementSibling.classList.add("panelActive");
        }
    });
});

// Voltar o estado do Title, Arrow e Text para o padrão.
function resetAll() {
    title.forEach((item) => {
        item.classList.remove("accordionActive");
    });

    arrow.forEach((item) => {
        item.classList.remove("arrowActive");
    });

    panel.forEach((item) => {
        item.classList.remove("panelActive");
    });
}
