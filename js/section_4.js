import { events, get_position } from "./utillites.js";

export const section_4 = () => {

  const scroll_two = document.querySelectorAll(".scroll-two");

  if (!scroll_two) {

    return;
  }

  const handle_scroll_animation = () => {

    for (const index of scroll_two) {

      const contains = index.classList.contains("animation");
      const height = index.getBoundingClientRect().height;
      const scrollPos = window.scrollY + window.innerHeight - height;
      const top = get_position(index);

      if (scrollPos > top && !contains) {
        index.classList.add("animation");
      }

      if (scrollPos < top && contains) {
        index.classList.remove("animation");
      }
    }
  };

  events(window, "scroll", handle_scroll_animation, {passive: true});
  events(window, "resize", handle_scroll_animation, {passive: true});
};