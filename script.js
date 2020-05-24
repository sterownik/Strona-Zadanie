var arrow = document.querySelector("img.strzalka");
var navleft = document.querySelector("nav.left");
var divleft = document.querySelector("div.leftleft");
var navp = document.querySelector("nav.left p");
var logobezkola = document.querySelector("nav.left img.logobezkola");
var lupka = document.querySelector("nav.top img");
var input = document.querySelector("nav.top input");
// nacisniecie strzalki w lewej nawigacji toggle
arrow.addEventListener("click", function () {
    console.log('klik');
    // dodanie lub odjecie klasy ktora ma chowac nawigacji w lewo 
    navleft.classList.toggle("hide");
    // dodanie lub odjecie klasy ktora ma chowac oprocz strzalki
    divleft.classList.toggle("hide");
    // obracanie strzalki
    arrow.classList.toggle("rotate");
    // chowanie lub pokazywanie napisu pod strzalka
    navp.classList.toggle("hide");
    // chowanie lub pokazywanie loga bez kola
    logobezkola.classList.toggle("hide");

})
lupka.addEventListener("click", function () {
    // pokazanie lub chwanie inputa po nacisnieciu na logo lupki
    input.classList.toggle("hide");
})