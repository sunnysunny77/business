const nav = document.getElementById("nav");
const button = document.getElementsByClassName("button");
const main = document.querySelector("main");
main.style.marginTop = nav.offsetHeight + "px";

function handleNav() {
    let scrollY = window.scrollY;

    if (scrollY >= main.offsetTop && window.innerWidth > 576) {

        nav.classList.add("sticky");
        nav.classList.remove("absolute");
        main.style.marginTop = 0;
    } else if (window.innerWidth > 576)  {
        nav.classList.add("absolute");
        nav.classList.remove("sticky");
        main.style.marginTop = nav.offsetHeight + "px";
    } else if (window.innerWidth <= 576) {
        nav.classList.remove("sticky");
    }


}

function handleTouch() {

    [...button].forEach(function (button) {images/section1.jpg
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

window.addEventListener("scroll", handleNav);