
const tabButtons = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
function showPanel(panelId) {
    panels.forEach(function (panel) {
        panel.classList.toggle("active", panel.id === panelId);
    });

    tabButtons.forEach(function (button) {
        button.classList.toggle("active", button.dataset.target === panelId);
    });
}

tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        showPanel(button.dataset.target);
    });
});
