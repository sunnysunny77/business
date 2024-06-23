const outer = document.querySelector(".outer");
const image = document.querySelectorAll(".scroll");
const imageTwo = document.querySelectorAll(".scrollTwo");

const getPosition = (element) => {
  let yPosition = 0;
  while (element) {
    yPosition += (element.offsetTop - element.scrollTop);
    element = element.offsetParent;
  }
  return yPosition;
};

const handleScrollAnimationMobile = () => {
  if (window.innerWidth > 1023) {
    return;
  }
  for (const index of image) {
    const position = getPosition(index);
    const contains = index.classList.contains("scroll-animation-mobile");
    const height = index.getBoundingClientRect().height;
    const scroll_mobile =
      window.scrollY + window.innerHeight - height - (height / 6);

    if (scroll_mobile > position && !contains) {
      index.classList.add("scroll-animation-mobile");
    }

    if (scroll_mobile < position && contains) {
      index.classList.remove("scroll-animation-mobile");
    }
  }
};

const handleScrollAnimationDesktop = () => {
  if (window.innerWidth < 1024) {
    return;
  }
  const position = getPosition(outer);
  const contains = outer.classList.contains(
    "scroll-animation-desktop"
  );
  const height = outer.getBoundingClientRect().height;
  const scroll_desktop = window.scrollY;
  const top = position;
  const bottom = position + (height / 2.5);

  if (scroll_desktop < top && contains) {
    outer.classList.remove("scroll-animation-desktop");
  }

  if (scroll_desktop > top && scroll_desktop < bottom && !contains) {
    outer.classList.add("scroll-animation-desktop");
  }

  if (scroll_desktop > bottom && contains) {
    outer.classList.remove("scroll-animation-desktop");
  }
};

const handleScrollAnimation = () => {
  for (const index of imageTwo) {
    const contains = index.classList.contains("animation");
    const height = index.getBoundingClientRect().height;
    const scrollPos = window.scrollY + window.innerHeight - height - (height / 3);
    const top = getPosition(index);

    if (scrollPos > top && !contains) {
      index.classList.add("animation");
    }

    if (scrollPos < top && contains) {
      index.classList.remove("animation");
    }
  }
};

window.addEventListener("scroll", handleScrollAnimationMobile);
window.addEventListener("scroll", handleScrollAnimationDesktop);
window.addEventListener("resize", handleScrollAnimationMobile);
window.addEventListener("resize", handleScrollAnimationDesktop);
window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("resize", handleScrollAnimation);