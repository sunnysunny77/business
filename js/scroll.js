function handleScroll() {
    const figureOne = document.getElementById("figureOne");
    const figureTwo = document.getElementById("figureTwo");
    const section = document.getElementById("section3");
    //top quater sticky height 25vh, + 25vh / 100vh = 50vh, minus half the figure height to find the middle
    const line = section.offsetTop + section.offsetHeight * 0.25 - figureOne.offsetHeight / 2 - figureTwo.offsetHeight / 2;
    let scrollY = window.scrollY;
    if (scrollY < line) {
        figureOne.className = "block";
        figureTwo.className = "none";
    }
    if (scrollY > line) {
        figureOne.className = "none";
        figureTwo.className = "block";
    }
}

window.addEventListener("scroll", handleScroll, { passive: true });
  