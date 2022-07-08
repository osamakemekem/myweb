window.addEventListener("load", function(){
    var spinner = document.getElementById("sp");
    document.body.style.overflow = "hidden";

    setTimeout(function(){
        spinner.style.display = "none";
        document.body.style.overflow = "auto";
    },)
});

// Dark Mode Button

/* UI colors for light & dark modes */
// var lightMode = {
/* Insert your light theme colors */
// bodyBackground: '#F5F5F5',
// bodyColor: '#212121',
// };
// var darkMode = {
// /* Insert your dark theme colors */
// bodyBackground: '#212121',
// bodyColor: '#fff',
// };

let menuBtn = document.querySelector(".menu__btn");
let navMenu = document.querySelector(".navbar__menu");

menuBtn,addEventListener ("click", () => {
navMenu.classList.toggle("closed");
document.querySelector(".menu__btn > i").className = "fa-solid fa-xmark"
})
