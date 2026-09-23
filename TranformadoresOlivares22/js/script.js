
// MENU RESPONSIVE

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});


// CARRUSEL

const slides = document.querySelectorAll(".slider img");

let index = 0;

function cambiarImagen(){

    slides[index].classList.remove("active");

    index = (index + 1) % slides.length;

    slides[index].classList.add("active");

}

setInterval(cambiarImagen, 3000);


const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){

        header.classList.add("scroll-header");

    }else{

        header.classList.remove("scroll-header");

    }

});

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    header.classList.toggle(
        "scrolled",
        window.scrollY > 50
    );

});

const menuToggle =
document.querySelector(".menu-toggle");

const nav =
document.querySelector("nav");

const overlay =
document.querySelector(".menu-overlay");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

    overlay.classList.toggle("active");

});

overlay.addEventListener("click", () => {

    nav.classList.remove("active");

    overlay.classList.remove("active");

});




