import { events } from "./utillites.js";

export const nav = () => {

  const navigation = document.querySelector("#nav");
  const main = document.querySelector("main");
  const navbar_collapse = document.querySelector(".navbar-collapse");

  if (!navigation || !main || !navbar_collapse) {

    return;
  }

  let scrollY = 0;

  let positive = false;

  let style = {};

  let collapse;

  let height = window.innerWidth >= 576 ? navigation.scrollHeight : navigation.scrollHeight - navbar_collapse.scrollHeight;


  const handle_collapse = (transition, height_param) => {

    let obj = {};

    navigation.classList.add("has-collapsed");
    obj.transition = transition;
    obj.maxHeight = `${height_param}px`;
    Object.assign(navigation.style, obj);
    collapse = height;
  };

  const handle_toggle = () => {

    if (window.innerWidth <= 576) {

      let obj = {};

      navigation.classList.toggle("has-collapsed");
      collapse = navigation.classList.contains("has-collapsed") ? height : navigation.scrollHeight;
      obj.transition = "max-height 0.375s";
      obj.maxHeight = `${collapse}px`;
      Object.assign(navigation.style, obj);
    }
  };

  const handle_height = () => {

    height = window.innerWidth >= 576 ? navigation.scrollHeight : navigation.scrollHeight - navbar_collapse.scrollHeight;
    collapse = navigation.classList.contains("has-collapsed") ? height : navigation.scrollHeight;
  };

  function handle_nav() {

    let scroll_pos = window.scrollY;

    const main_top = main.offsetTop - height;

    const main_bottom = main.offsetTop + main.scrollHeight - height;

    const body = document.body;

    const wins = window.innerWidth <= 576;

    let obj = {};

    if (scroll_pos < main_top ) {

      obj.clipPath = wins ? "initial" : "inset(100%)";
      obj.position = wins ? "static" : "fixed";
      obj.top = wins ? "0px" : `-${height}px`;
      body.style.marginTop = "";
      handle_collapse(wins ? "max-height 0.375s" : "top 0.375s, max-height 0.375s", height);
    } else if ((scroll_pos > main_top && !positive) || (scroll_pos > main_bottom))  {

      obj.clipPath = "initial";
      obj.position = "fixed";
      obj.top = `-${height}px`;
      body.style.marginTop = wins ? `${height}px` : "";   
      handle_collapse("top 0.375s, max-height 0.375s", height);
    } else if (scroll_pos > main_top && positive) {

      obj.clipPath = "initial";
      obj.position = "fixed";
      obj.top = "0px";
      obj.transition = "top 0.375s, max-height 0.375s";
      obj.maxHeight = `${collapse}px`;
      body.style.marginTop = wins ? `${height}px` : "";   
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
  events(window, "resize", handle_height, { passive: true });
  events(navigation, "click", handle_toggle);
};