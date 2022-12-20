const nav = document.getElementById("nav");
const button = document.getElementsByClassName("button");

function handleTouch() {

    [...button].forEach(function (button) {
        button.classList.add("display");
    });
}

function handleMove() {

    [...button].forEach(function (button) {
        button.classList.remove("display");
    });
}

nav.addEventListener("touchstart", handleTouch);

document.addEventListener("touchmove", handleMove);