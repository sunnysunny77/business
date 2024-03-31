const getPosition = (element) => {
  let yPosition = 0;
  while (element) {
    yPosition += (element.offsetTop - element.scrollTop);
    element = element.offsetParent;
  }
  return yPosition;
};

// eslint-disable-next-line complexity
const handleScrollAnimation = () => {

  const outer = document.querySelector(".outer");

  let scrollPosOuter = window.scrollY + (window.innerHeight /  2) - (outer.offsetHeight / 4);

  if (scrollPosOuter > getPosition(outer)  && !outer.classList.contains("animation") && window.innerWidth > 1023) {

    outer.classList.add("animation");
  }

  if (scrollPosOuter < getPosition(outer)  && outer.classList.contains("animation") && window.innerWidth > 1023) {

    outer.classList.remove("animation");
  }

  let scrollPosOuterTwo = window.scrollY + (window.innerHeight /  3) - (outer.offsetHeight / 1.75);


  if (scrollPosOuterTwo > getPosition(outer)  && outer.classList.contains("animation") && window.innerWidth > 1023) {

    outer.classList.remove("animation");

  }

  const image = document.querySelectorAll(".scroll");

  for (let i in image) {

    let scrollPos = window.scrollY + window.innerHeight  - image[i].offsetHeight - (image[i].offsetHeight / 2);

    if (scrollPos > getPosition(image[i]) && !image[i].classList.contains("animation") && window.innerWidth < 1023) {

      image[i].classList.add("animation");
    }
    if (scrollPos < getPosition(image[i]) && image[i].classList.contains("animation") && window.innerWidth < 1023) {

      image[i].classList.remove("animation");
    }

  }

  const imageTwo = document.querySelectorAll(".scrollTwo");

  for (let i in imageTwo) {

    let scrollPos = window.scrollY + window.innerHeight - imageTwo[i].offsetHeight - (imageTwo[i].offsetHeight / 3);

    if (scrollPos > getPosition(imageTwo[i]) && !imageTwo[i].classList.contains("animation")) {

      imageTwo[i].classList.add("animation");
    }
    if (scrollPos < getPosition(imageTwo[i]) && imageTwo[i].classList.contains("animation")) {

      imageTwo[i].classList.remove("animation");
    }
  }

};

window.addEventListener("scroll", handleScrollAnimation);

window.addEventListener("resize", handleScrollAnimation);