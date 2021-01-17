const btn = document.querySelector(".menu");
const menu = document.querySelector(".navigation__list");
const close = document.querySelector(".x");

btn.addEventListener("click",() => {
    menu.classList.toggle("navigation__display");
});
close.addEventListener("click",() => {
    menu.classList.toggle("navigation__display");
});

console.log(menu)