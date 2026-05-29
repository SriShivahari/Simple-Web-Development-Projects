document.addEventListener("DOMContentLoaded", () => {
    const inputEl = document.querySelector(".input");
    const bodyEl = document.querySelector("body");

    const savedMode = localStorage.getItem("mode");
    if (savedMode !== null) {
        inputEl.checked = JSON.parse(savedMode);
    } else {
        localStorage.setItem("mode", JSON.stringify(false));
    }

    function updateBody() {
        bodyEl.style.background = inputEl.checked ? "black" : "white";
    }

    inputEl.addEventListener("input", () => {
        updateBody();
        localStorage.setItem("mode", JSON.stringify(inputEl.checked));
    });

    updateBody();
});
