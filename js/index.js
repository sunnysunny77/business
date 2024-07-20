// import '../node_modules/bootstrap/js/dist/alert';
// import '../node_modules/bootstrap/js/dist/button';
import '../node_modules/bootstrap/js/dist/carousel';
// import '../node_modules/bootstrap/js/dist/collapse';
// import '../node_modules/bootstrap/js/dist/dropdown';
// import '../node_modules/ootstrap/js/dist/modal';
// import '../node_modules/bootstrap/js/dist/offcanvas';
// import '../node_modules/bootstrap/js/dist/popover';
// import '../node_modules/bootstrap/js/dist/scrollspy';
// import '../node_modules/bootstrap/js/dist/tab';
// import '../node_modules/bootstrap/js/dist/toast';
// import '../node_modules/bootstrap/js/dist/tooltip';
import "../node_modules/@fortawesome/fontawesome-free/js/all.js";
// import { service_worker } from "./service_worker.js";
import { slider_1 } from "./slider-1.js";
import { scroll } from "./scroll.js";
import { nav } from "./nav.js";
import { scroll_animation } from "./scroll-animation.js";
import { preload } from "./preload.js";

window.onload = () => {
    slider_1();
   scroll();
   scroll_animation();
   nav();
   preload();
     //service_worker();
};
