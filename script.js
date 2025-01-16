const burgir = document.querySelector(".toggle__menu");
const headernav = document.querySelector(".header .header__nav");
burgir.addEventListener("click", () => {
burgir.classList.toggle("open");    
headernav.classList.toggle("open");    
});
