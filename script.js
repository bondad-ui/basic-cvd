const burgir = document.querySelector(".toggle__menu");
const headernav = document.querySelector(".header .header__nav");
burgir.addEventListener("click", () => {
burgir.classList.toggle("open");    
headernav.classList.toggle("open");    
});

const b2Top = document.querySelector(".backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    b2Top.classList.add("open");
  } else {
    b2Top.classList.remove("open");
  }
});
