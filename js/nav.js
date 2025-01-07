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

    let obj = {};

    if (window.innerWidth <= 576) {
      obj.clipPath = "initial";
      obj.position = "sticky";
      obj.top = "0px";
      obj.transition = "none";
      Object.assign(navigation.style, obj);   
      return;
    }

    if (window.scrollY > scrollY) {

      positive = true;
    } else if (window.scrollY < scrollY)  {

      positive = false;
    } 

    scrollY = window.scrollY;

    const height = 51.59;

    if (scrollY < main.offsetTop ) {

      obj.clipPath = "inset(100%)";
      obj.position = "fixed";
      obj.top = `-${height}px`;
      obj.transition = "none";
      Object.assign(navigation.style, obj);   
    } else if(scrollY < main.offsetTop + navigation.offsetHeight && scrollY > main.offsetTop && !positive) {

      obj.clipPath = "initial";
      obj.position = "fixed";
      obj.top = `-${height}px`;
      obj.transition = "top 0.375s";
      Object.assign(navigation.style, obj);   
    } else if (scrollY > main.offsetTop && !positive) {

      obj.clipPath = "initial";
      obj.position = "fixed";
      obj.top = "0px";
      obj.transition = "top 0.375s";
      Object.assign(navigation.style, obj);   
    } else if (scrollY > main.offsetTop && positive) {

      obj.clipPath = "initial";
      obj.position = "fixed";
      obj.top = `-${height}px`;
      obj.transition = "top 0.375s";
      Object.assign(navigation.style, obj);
    }
  }

  events(window, "scroll", handle_nav, {passive: true});
  events(window, "resize", handle_nav, {passive: true});
};