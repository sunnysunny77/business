const getPosition = (element) => {
  let yPosition = 0;
  while (element) {
    yPosition += (element.offsetTop - element.scrollTop);
    element = element.offsetParent;
  }
  return yPosition;
};

const handleScrollAnimation = () => {

  const image = document.querySelectorAll(".scroll");

  for (let i in image) {

    let scrollPos = window.scrollY + window.innerHeight - image[i].offsetHeight - (image[i].offsetHeight / 3);

    if (scrollPos > getPosition(image[i]) && !image[i].classList.contains("animation")) {

      image[i].classList.add("animation");
    }
    if (scrollPos < getPosition(image[i]) && image[i].classList.contains("animation")) {

      image[i].classList.remove("animation");
    }
  }
};

window.addEventListener("scroll", handleScrollAnimation);