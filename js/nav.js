export const nav = () => {
  const nav = document.querySelector("#nav");
  const main = document.querySelector("main");

  function handleNav() {
    let scrollY = window.scrollY;

    if (scrollY >= main.offsetTop - nav.offsetHeight && window.innerWidth > 575) {

      nav.classList.add("sticky");
      nav.classList.remove("absolute");
      main.style.marginTop = 0;
    } else if (window.innerWidth > 575)  {

      nav.classList.add("absolute");
      nav.classList.remove("sticky");
      main.style.marginTop = `${ nav.offsetHeight  }px`;
    } else if (window.innerWidth <= 575 ) {
      main.style.marginTop = 0;
    }
  }

  window.addEventListener("scroll", handleNav);

  window.addEventListener("resize", handleNav);
};