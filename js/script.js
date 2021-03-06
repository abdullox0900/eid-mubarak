"use strict";

let textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

AOS.init({
    debounceDelay: 100,
    throttleDelay: 150,
    offset: 200,
    delay: 0,
    duration: 1500,
});

anime.timeline({ loop: true })
    .add({
        targets: '.ml9 .letter',
        scale: [0, 1],
        duration: 2000,
        elasticity: 600,
        delay: (el, i) => 45 * (i + 1)
    })
    .add({
        targets: '.ml9',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

const elMenuBtn = document.querySelector(".header__burger-btn");
const elHeader = document.querySelector(".header");

elMenuBtn.addEventListener("click", () => {
    elHeader.classList.toggle("header--open");
});
