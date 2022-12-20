const nav = document.getElementById("nav");
const main = document.getElementById("main");
const button = document.getElementsByClassName("button");

function handleNav() {

    let scrollY = window.scrollY;

    if (scrollY < main.offsetTop && window.innerWidth > 576) {

        [...button].forEach(function (button) {
            button.classList.remove("toggle");
        });
        nav.style.position = "absolute";
        nav.style.top = "1%";
        nav.style.backgroundImage = "none";
        main.style.paddingTop = nav.offsetHeight + "px";
        nav.style.backgroundColor = "unset";
    }

    if (scrollY >= main.offsetTop && window.innerWidth > 576) {

        [...button].forEach(function (button) {
            button.classList.add("toggle");
        });
        nav.style.position = "sticky";
        nav.style.top = 0;
        nav.style.backgroundImage = "url('images/climpek.png')";
        nav.style.backgroundColor = "white";
        main.style.paddingTop = 0;
    }
}

function handleResize() {

    if (window.innerWidth <= 576) {

        nav.style = "";
        nav.classList = "";
        [...button].forEach(function (button) {
            button.classList.remove("toggle");
        });
    } 
}

window.addEventListener("resize", handleResize);

window.addEventListener("scroll", handleNav);