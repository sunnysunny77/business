export const nav = () => {
  const nav = document.querySelector("#nav");
  const main = document.querySelector("main");

  function handleNav() {
    let scrollY = window.scrollY;

    if (scrollY >= main.offsetTop - nav.offsetHeight && window.innerWidth > 576) {

      nav.classList.add("sticky");
      nav.classList.remove("absolute");
      main.style.marginTop = 0;
    } else if (window.innerWidth > 576)  {

      nav.classList.add("absolute");
      nav.classList.remove("sticky");
      main.style.marginTop = `${nav.offsetHeight  }px`;
    }
  }

  window.addEventListener("scroll", handleNav);

  window.addEventListener("resize", handleNav);
};