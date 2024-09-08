import { events } from "./utillites.js";

export const nav = () => {

  const navigation = document.querySelector("#nav");
  const main = document.querySelector("main");

  if (!navigation || !main) {

    return;
  }

  let scrollY = 0;

  function handle_nav() {

    let positive = false;

    if (window.innerWidth <= 576) {

      navigation.classList.remove("navigation-top");
      navigation.classList.remove("navigation-fixed");
      return;
    }

    if (window.scrollY > scrollY) {

      positive = true;
    } else if (window.scrollY < scrollY)  {

      positive = false;
    }

    scrollY = window.scrollY;

    if (scrollY < main.offsetTop + navigation.offsetHeight && scrollY > main.offsetTop && !positive) {

      navigation.classList.add("navigation-top");
    } else if (scrollY > main.offsetTop && !positive) {

      navigation.classList.remove("navigation-top");
      navigation.classList.add("navigation-fixed");
    } else if (scrollY > main.offsetTop && positive) {

      navigation.classList.add("navigation-top");
    } else if (navigation.classList.contains("navigation-top") || navigation.classList.contains("navigation-fixed")) {

      navigation.classList.remove("navigation-top");
      navigation.classList.remove("navigation-fixed");
    }

  }

  events(window, "scroll", handle_nav, {passive: true});
  events(window, "resize", handle_nav, {passive: true});
};