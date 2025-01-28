//import "../node_modules/bootstrap/js/dist/alert";
//import "../node_modules/bootstrap/js/dist/button";
import "../node_modules/bootstrap/js/dist/carousel";
import "../node_modules/bootstrap/js/dist/collapse";
//import "../node_modules/bootstrap/js/dist/dropdown";
//import "../node_modules/ootstrap/js/dist/modal";
//import "../node_modules/bootstrap/js/dist/offcanvas";
//import "../node_modules/bootstrap/js/dist/popover";
//import "../node_modules/bootstrap/js/dist/scrollspy";
//import "../node_modules/bootstrap/js/dist/tab";
//import "../node_modules/bootstrap/js/dist/toast";
//import "../node_modules/bootstrap/js/dist/tooltip";

import AOS from "../node_modules/aos/dist/aos.js";
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
