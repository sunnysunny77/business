import { events, get_position } from "./utillites.js";

export const slider_4 = () => {

  const figureOne = document.querySelector("#figure-one");
  const figureTwo = document.querySelector("#figure-two");
  const outer = document.querySelector(".outer");
  const scroll = document.querySelectorAll(".scroll");

  if (!figureOne || !figureTwo || !outer  || ! scroll) {

    return;
  }

  const handle_scroll = () => {
   
    if (window.innerWidth < 767) {
      return;
    }

    const line = get_position(outer) + outer.getBoundingClientRect().height / 2;
    let scrollY = window.scrollY + window.innerHeight / 2;

    if (scrollY < line) {
      figureTwo.classList.replace("d-md-has-height", "d-md-0-height");
      figureOne.classList.replace("d-md-0-height", "d-md-has-height");
    }
    if (scrollY > line) {
      figureOne.classList.replace("d-md-has-height", "d-md-0-height");
      figureTwo.classList.replace("d-md-0-height", "d-md-has-height");
    }
  };

  const handle_scroll_animation_mobile = () => {
    if (window.innerWidth > 767) {
      return;
    }
    for (const index of scroll) {
      const position = get_position(index);
      const contains = index.classList.contains("scroll-animation-mobile");
      const height = index.getBoundingClientRect().height;
      const scroll_mobile =
        window.scrollY + window.innerHeight - height;

      if (scroll_mobile > position && !contains) {
        index.classList.add("scroll-animation-mobile");
      }

      if (scroll_mobile < position && contains) {
        index.classList.remove("scroll-animation-mobile");
      }
    }
  };

  const handle_scroll_animation_desktop = () => {
    if (window.innerWidth < 767) {
      return;
    }
    const position = get_position(outer);
    const contains = outer.classList.contains(
      "scroll-animation-desktop"
    );
    const height = outer.getBoundingClientRect().height;
    const scroll_desktop = window.scrollY;
    const top = position;
    const bottom = position + (height / 2.5);

    if (scroll_desktop < top && contains) {
      outer.classList.remove("scroll-animation-desktop");
    }

    if (scroll_desktop > top && scroll_desktop < bottom && !contains) {
      outer.classList.add("scroll-animation-desktop");
    }

    if (scroll_desktop > bottom && contains) {
      outer.classList.remove("scroll-animation-desktop");
    }
  };

  events(window, "scroll", handle_scroll, {passive: true});
  events(window, "resize", handle_scroll, {passive: true});
  events(window, "scroll", handle_scroll_animation_mobile, {passive: true});
  events(window, "scroll", handle_scroll_animation_desktop, {passive: true});
  events(window, "resize", handle_scroll_animation_mobile, {passive: true});
  events(window, "resize", handle_scroll_animation_desktop, {passive: true});
};