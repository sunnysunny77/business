import "bootstrap";
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
