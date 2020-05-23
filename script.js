var arrow = document.querySelector("img.strzalka");
var navleft = document.querySelector("nav.left");
var divleft = document.querySelector("div.leftleft");
var navp = document.querySelector("nav.left p");
var logobezkola = document.querySelector("nav.left img.logobezkola");

arrow.addEventListener("click", function () {
    console.log('klik');
    navleft.classList.toggle("hide");
    divleft.classList.toggle("hide");
    arrow.classList.toggle("rotate");
    navp.classList.toggle("hide");
    logobezkola.classList.toggle("hide");
})