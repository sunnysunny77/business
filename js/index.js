//import "../node_modules/bootstrap/js/dist/alert";
//import "../node_modules/bootstrap/js/dist/button";
import "../node_modules/bootstrap/js/dist/carousel";
//import "../node_modules/bootstrap/js/dist/collapse";
//import "../node_modules/bootstrap/js/dist/dropdown";
//import "../node_modules/ootstrap/js/dist/modal";
//import "../node_modules/bootstrap/js/dist/offcanvas";
//import "../node_modules/bootstrap/js/dist/popover";
//import "../node_modules/bootstrap/js/dist/scrollspy";
//import "../node_modules/bootstrap/js/dist/tab";
///import "../node_modules/bootstrap/js/dist/toast";
//import "../node_modules/bootstrap/js/dist/tooltip";
import { service_worker } from "./service_worker.js";
import "../node_modules/@fortawesome/fontawesome-free/js/all.min.js";
import { preload } from "./preload.js";
import { nav } from "./nav.js";
import { scroll } from "./scroll.js";
import { scroll_animation } from "./scroll_animation.js";
import { slider_1 } from "./slider_1.js";

window.onload = () => {
  preload();
  nav();
  scroll();
  scroll_animation();
  slider_1();
  service_worker();
};
