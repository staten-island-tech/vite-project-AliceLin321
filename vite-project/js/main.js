import "../styles/style.css";

import { menu } from "./menu.js";

const DOM = {
  menupage: document.getElementById("menupage"),
  btn: document.getElementById("btn"),
};

DOM.btn.addEventListener("click", function () {
  console.log("hi");
});

/*menu.forEach((menu) =>
  DOM.menupage.insertAdjacentHTML(
    "beforeend",
    `
    <div class="child">
  <img class="img" src="${menu.img}"><img>
  <h1 class="price">${menu.name}</h1>
  <h2 class="price">$${menu.price}</h2>
  </div>
  `
  )
);*/

DOM.btn.addEventListener("click", function () {
  DOM.menupage.innerHTML = "";
  screwvegan();
});

function screwvegan() {
  menu
    .filter((menu) => menu.vegan === "false")
    .forEach((menu) =>
      DOM.menupage.insertAdjacentHTML(
        "beforeend",
        `
  <div class="child">
<img class="img" src="${menu.img}"><img>
<h1 class="price">${menu.name}</h1>
<h2 class="price">$${menu.price}</h2>
</div>
`
      )
    );
}
