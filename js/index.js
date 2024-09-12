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
import  AOS from "../node_modules/aos/dist/aos.js";
import { service_worker } from "./service_worker.js";
import { nav } from "./nav.js";
import { section_3 } from "./section_3.js";
import { section_4 } from "./section_4.js";
import { slider_1 } from "./slider_1.js";
import { fallback } from "./fallback.js";

window.onload = () => {

  AOS.init({once: true});
  nav();
  fallback();
  section_3();
  section_4();
  slider_1();
  service_worker();
};
