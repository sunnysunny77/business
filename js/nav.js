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

  let has_collapsed = true;

  let height = window.innerWidth < 576 ? navigation.scrollHeight - navbar_collapse.scrollHeight : navigation.scrollHeight;

  const handle_children = () => {

    const wins = window.innerWidth < 576;
    
    for (const index of navbar_collapse.children) {

      Object.assign(index.style, {

        transition: wins ? "transform 0.375s" : "none",
        transform: wins && has_collapsed ? `translateY(-${navbar_collapse.children.length}00%)` : "translateY(0)",
      });
    };
  };

  const handle_collapse = (transition, height_param) => {

    has_collapsed = true;
    collapse = height;

    Object.assign(navigation.style, {

      transition: transition,
      backgroundColor: "#FFFFFF",
      maxHeight: `${height_param}px`,
    });
    
    handle_children();
  };

  const handle_toggle = () => {

    const wins = window.innerWidth < 576;
    has_collapsed = !has_collapsed;
    collapse = has_collapsed ? height : navigation.scrollHeight;

    Object.assign(navigation.style, {

      transition: wins ? "max-height 0.375s, background-color 0.375s" : "top 0.375s, max-height 0.375s",
      backgroundColor: !has_collapsed ? wins ? "#d3d3d3" : "#FFFFFF" : "#FFFFFF",
      maxHeight: `${collapse}px`,
    });

    handle_children();
  };

  function handle_nav() {

    const wins = window.innerWidth < 576;

    height = wins ? navigation.scrollHeight - navbar_collapse.scrollHeight : navigation.scrollHeight;

    collapse = has_collapsed ? height : navigation.scrollHeight;

    let scroll_pos = window.scrollY;

    const main_top = positive ? main.offsetTop - height : main.offsetTop;

    const main_bottom = main.offsetTop + main.scrollHeight - height;

    const body = document.body;

    let obj = {};

    if (scroll_pos < main_top ) {

      obj.clipPath = wins ? "initial" : "inset(100%)";
      obj.position = wins ? "static" : "fixed";
      obj.top = wins ? "0px" : `-${height}px`;
      body.style.marginTop = "";
      handle_collapse(wins ? "max-height 0.375s, background-color 0.375s" : "top 0.375s, max-height 0.375s", height);
    } else if ((scroll_pos > main_top && !positive) || (scroll_pos > main_bottom))  {

      obj.clipPath = "initial";
      obj.position = "fixed";
      obj.top = `-${height}px`;
      body.style.marginTop = wins ? `${height}px` : "";   
      handle_collapse(wins ? "top 0.375s, max-height 0.375s, background-color 0.375s" : "top 0.375s, max-height 0.375s", height);
    } else if (scroll_pos > main_top && positive) {

      obj.clipPath = "initial";
      obj.position = "fixed";
      obj.top = "0px";
      obj.transition = "top 0.375s, max-height 0.375s";
      obj.maxHeight = `${collapse}px`;
      body.style.marginTop = wins ? `${height}px` : "";
      handle_children();
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
  events(navigation, "click", handle_toggle);
};