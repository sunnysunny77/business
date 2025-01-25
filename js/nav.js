import { events } from "./utillites.js";

export const nav = () => {

  const navigation = document.querySelector("#nav");
  const main = document.querySelector("main");

  if (!navigation || !main) {

    return;
  }

  let scrollY = 0;

  let positive = false;

  let style = {};

  function handle_nav() {

    let scroll_pos = window.scrollY;

    const main_top = main.offsetTop;

    const main_bottom = main.offsetTop + main.scrollHeight - navigation.scrollHeight;

    const height = navigation.scrollHeight;

    let obj = {};

    if (window.innerWidth <= 576) {

      obj.clipPath = "initial";
      obj.position = "sticky";
      obj.top = "0px";
      obj.transition = "none";
      Object.assign(navigation.style, obj);   
      return;
    }

    if (scroll_pos < main_top ) {

      obj.clipPath = "inset(100%)";
      obj.position = "fixed";
      obj.top = `-${height}px`;
      obj.transition = "none";
    } else if ((scroll_pos > main_top && !positive) || (scroll_pos > main_bottom))  {

      obj.clipPath = "initial";
      obj.position = "fixed";
      obj.top = `-${height}px`;
      obj.transition = "top 0.375s";   
    } else if (scroll_pos > main_top && positive) {

      obj.clipPath = "initial";
      obj.position = "fixed";
      obj.top = "0px";
      obj.transition = "top 0.375s";
    }

    if (obj !== style) Object.assign(navigation.style, obj);

    if (scroll_pos > scrollY) {

      positive = true;
    } else if (scroll_pos < scrollY)  {

      positive = false;
    }

    style = obj;

    scrollY = window.scrollY;
  }

  events(window, "wheel", handle_nav, {passive: true});
  events(window, "scroll", handle_nav, {passive: true});
  events(window, "resize", handle_nav, {passive: true});
};