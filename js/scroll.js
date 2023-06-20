function handleScroll() {
  const figureOne = document.querySelector("#figureOne");
  const figureTwo = document.querySelector("#figureTwo");
  const section = document.querySelector("#section2");
  //top quater sticky height 25vh, + 25vh / 100vh = 50vh, minus half the figure height to find the middle
  const line = section.offsetTop + (section.offsetHeight * 0.25) - (figureOne.offsetHeight / 2) - (figureTwo.offsetHeight / 2);
  let scrollY = window.scrollY;
  if (scrollY < line) {
    figureOne.setAttribute("class", "block");
    figureTwo.setAttribute("class", "none");
  }
  if (scrollY > line) {
    figureOne.setAttribute("class", "none");
    figureTwo.setAttribute("class", "block");
  }
}

window.addEventListener("scroll", handleScroll, { passive: true });
