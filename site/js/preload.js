const preload_image = (url) => {
  var img = new Image();
  img.src = url;
};

if (window.screen.width > 1200) {

  preload_image("./images/header.webp");
} else {

  preload_image ("./images/header-mobile.webp");
}