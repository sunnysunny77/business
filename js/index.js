// import "bootstrap/js/dist/alert";
// import "bootstrap/js/dist/button";
import "bootstrap/js/dist/carousel";
import "bootstrap/js/dist/collapse";
// import "bootstrap/js/dist/dropdown";
// import "bootstrap/js/dist/modal";
// import "bootstrap/js/dist/popover";
// import "bootstrap/js/dist/scrollspy";
// import "bootstrap/js/dist/tab";
// import "bootstrap/js/dist/toast";
// import "bootstrap/js/dist/tooltip";

import AOS from "aos";
import { service_worker } from "./service_worker.js";
import { nav } from "./nav.js";
import { slider_2 } from "./slider_2.js";
import { slider_4 } from "./slider_4.js";
import { slider_8 } from "./slider_8.js";
import { slider_1 } from "./slider_1.js";
import { fallback } from "./fallback.js";

window.onload = () => {

  AOS.init({once: true});
  nav();
  fallback();
  slider_2();
  slider_4();
  slider_8();
  slider_1();
  service_worker();
};
