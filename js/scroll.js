function handleScroll() {
  const figureOne = document.querySelector("#figureOne");
  const figureTwo = document.querySelector("#figureTwo");
  const section = document.querySelector("#section2");
  //top quater sticky height 25vh, + 25vh / 100vh = 50vh, minus half the figure height to find the middle
  if (window.innerWidth < 992) {
    return;
  }
  const line =
    section.offsetTop +
    (section.getBoundingClientRect().height * 0.25) -
    (figureOne.getBoundingClientRect().height / 2) -
    (figureTwo.getBoundingClientRect().height / 2);
  let scrollY = window.scrollY;
  if (scrollY < line) {
    figureTwo.classList.replace("d-lg-has-height", "d-lg-0-height");
    figureOne.classList.replace("d-lg-0-height", "d-lg-has-height");
  }
  if (scrollY > line) {
    figureOne.classList.replace("d-lg-has-height", "d-lg-0-height");
    figureTwo.classList.replace("d-lg-0-height", "d-lg-has-height");
  }
}

window.addEventListener("scroll", handleScroll, { passive: true });
