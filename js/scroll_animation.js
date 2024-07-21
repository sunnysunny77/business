export const scroll_animation = () => {
  const outer = document.querySelector(".outer");
  const scroll = document.querySelectorAll(".scroll");
  const scroll_two = document.querySelectorAll(".scroll-two");

  const getPosition = (element) => {
    let yPosition = 0;
    while (element) {
      yPosition += (element.offsetTop - element.scrollTop);
      element = element.offsetParent;
    }
    return yPosition;
  };

  const handle_scroll_animation_mobile = () => {
    if (window.innerWidth > 1023) {
      return;
    }
    for (const index of scroll) {
      const position = getPosition(index);
      const contains = index.classList.contains("scroll-animation-mobile");
      const height = index.getBoundingClientRect().height;
      const scroll_mobile =
        window.scrollY + window.innerHeight - height - (height / 6);

      if (scroll_mobile > position && !contains) {
        index.classList.add("scroll-animation-mobile");
      }

      if (scroll_mobile < position && contains) {
        index.classList.remove("scroll-animation-mobile");
      }
    }
  };

  const handle_scroll_animation_desktop = () => {
    if (window.innerWidth < 1024) {
      return;
    }
    const position = getPosition(outer);
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

  const handle_scroll_animation = () => {
    for (const index of scroll_two) {
      const contains = index.classList.contains("animation");
      const height = index.getBoundingClientRect().height;
      const scrollPos = window.scrollY + window.innerHeight - height - (height / 3);
      const top = getPosition(index);

      if (scrollPos > top && !contains) {
        index.classList.add("animation");
      }

      if (scrollPos < top && contains) {
        index.classList.remove("animation");
      }
    }
  };

  window.addEventListener("scroll", handle_scroll_animation_mobile);
  window.addEventListener("scroll", handle_scroll_animation_desktop);
  window.addEventListener("resize", handle_scroll_animation_mobile);
  window.addEventListener("resize", handle_scroll_animation_desktop);
  window.addEventListener("scroll", handle_scroll_animation);
  window.addEventListener("resize", handle_scroll_animation);
};