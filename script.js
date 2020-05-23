var arrow = document.querySelector("img.strzalka");
var navleft = document.querySelector("nav.left");
var divleft = document.querySelector("div.leftleft");
var navp = document.querySelector("nav.left p");
var logobezkola = document.querySelector("nav.left img.logobezkola");
var lupka = document.querySelector("nav.top img");
var input = document.querySelector("nav.top input");

arrow.addEventListener("click", function () {
    console.log('klik');
    navleft.classList.toggle("hide");
    divleft.classList.toggle("hide");
    arrow.classList.toggle("rotate");
    navp.classList.toggle("hide");
    logobezkola.classList.toggle("hide");

})
lupka.addEventListener("click", function () {
    input.classList.toggle("hide");
})