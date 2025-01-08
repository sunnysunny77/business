import { events } from "./utillites.js";

export const nav = () => {

  const navigation = document.querySelector("#nav");
  const main = document.querySelector("main");

  if (!navigation || !main) {

    return;
  }

  let scrollY = 0;

  let obj = {};

  function handle_nav() {

    let positive = false;

    let scroll_pos = window.scrollY;

    const main_top = main.offsetTop;

    const navigation_top = navigation.scrollHeight;

    if (window.innerWidth <= 576) {

      obj.clipPath = "initial";
      obj.position = "sticky";
      obj.top = "0px";
      obj.transition = "none";
      Object.assign(navigation.style, obj);   
      return;
    }

    if (scroll_pos > scrollY) {

      positive = true;
    } else if (scroll_pos < scrollY)  {

      positive = false;
    } 

    const height = 51.59;

    if (scroll_pos < main_top ) {

      obj.clipPath = "inset(100%)";
      obj.position = "fixed";
      obj.top = `-${height}px`;
      obj.transition = "none";
    } 
    
    if ((scroll_pos < main_top + navigation_top && scroll_pos > main_top && !positive) || (scroll_pos > main_top + navigation_top && positive)) {

      obj.clipPath = "initial";
      obj.position = "fixed";
      obj.top = `-${height}px`;
      obj.transition = "top 0.375s";   
    } 
    
    if (scroll_pos > main_top + navigation_top && !positive) {

      obj.clipPath = "initial";
      obj.position = "fixed";
      obj.top = "0px";
      obj.transition = "top 0.375s";
    } 

    Object.assign(navigation.style, obj);

    scrollY = window.scrollY;
  }

  events(window, "scroll", handle_nav, {passive: true});
  events(window, "resize", handle_nav, {passive: true});
};