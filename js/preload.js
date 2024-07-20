export const preload = () => {
  let head = document.querySelector("head");
  let link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  if (window.screen.width > 576) {
    link.href = "./images/header.webp";
    head.append(link);
  } else {
    link.href = "./images/headerm.webp";
    head.append(link);
  }
};