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

      navigation.style.removeProperty("clip-path"); 
      navigation.style.removeProperty("transition"); 
      navigation.style.removeProperty("background-color"); 
      navigation.style.removeProperty("background-image");
      Object.assign(navigation.style,{ position: "sticky", top: 0 });   
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

      Object.assign(navigation.style,{ clipPath: "inset(100%)" });   
    } else if(scrollY < main.offsetTop + navigation.offsetHeight && scrollY > main.offsetTop && !positive) {

      Object.assign(navigation.style,{ position: "fixed", top: `-${height}px` });   
    } else if (scrollY > main.offsetTop && !positive) {

      Object.assign(navigation.style,{ position: "fixed", top: 0 });   
    } else if (scrollY > main.offsetTop && positive) {

      Object.assign(navigation.style,{ clipPath: "initial", position: "fixed", zIndex: 999, top: `-${height}px`, transition: "top 0.375s", backgroundColor: "#FFFFFF", backgroundImage: "url(../images/nav-texture.webp)" });

    }
  }

  events(window, "scroll", handle_nav, {passive: true});
  events(window, "resize", handle_nav, {passive: true});
};