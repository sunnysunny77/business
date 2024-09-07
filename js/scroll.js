export const scroll = () => {
  const handle_scroll = () => {
    const figureOne = document.querySelector("#figure-one");
    const figureTwo = document.querySelector("#figure-two");
    const outer = document.querySelector(".outer");
    if (window.innerWidth < 767) {
      return;
    }
    const line =
      outer.offsetTop +
      (outer.getBoundingClientRect().height * 0.25) -
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
  };
  window.addEventListener("scroll", handle_scroll, { passive: true });
};