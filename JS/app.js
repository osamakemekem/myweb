

// Get important Element
const sections = document.querySelectorAll("section");
const ul = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();
// create frist function
const func = (function () {
  // bulid loop type .for Each to reapet All sections.
  sections.forEach((elm) => {
    let dataLink = elm.getAttribute("data-nav");
    let anchor = document.createElement("a");
    console.log(anchor);
    let textNod = document.createTextNode(dataLink);
    console.log(textNod);
    let list = document.createElement("li");
    console.log(list);
    anchor.setAttribute("class", "menu__link");
    // bulid Append child
    anchor.appendChild(textNod);
    list.appendChild(anchor);
    // bulid scroll with smooth
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      elm.scrollIntoView({ behavior: "smooth" });
    });
    //To improve  the performance
    fragment.appendChild(list);
  });
  ul.appendChild(fragment);
})(); // end function


