import "../styles/style.css";

import { menu } from "./menu.js";

const DOM = {
  menupage: document.getElementById("menupage"),
  nonvegan: document.getElementById("nonvegan"),
  halal: document.getElementById("halal"),
  nonhalal: document.getElementById("nothalal"),
  mainmenu: document.getElementById("everything"),
};
document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("dirt")) {
    document.body.classList.add("earth");
    document.body.classList.remove("dirt");
  } else {
    document.body.classList.add("dirt");
    document.body.classList.remove("warm");
  }
});
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

menu.forEach((menu) =>
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

DOM.mainmenu.addEventListener("click", function () {
  DOM.menupage.innerHTML = "";
  all();
});

function all() {
  menu.forEach((menu) =>
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

DOM.btn.addEventListener("click", function () {
  DOM.menupage.innerHTML = "";
  screwvegan();
});

function screwvegan() {
  menu
    .filter((menu) => menu.vegan === "true")
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

DOM.nonvegan.addEventListener("click", function () {
  DOM.menupage.innerHTML = "";
  nonvegan();
});

function nonvegan() {
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

DOM.halal.addEventListener("click", function () {
  DOM.menupage.innerHTML = "";
  halal();
});

function halal() {
  menu
    .filter((menu) => menu.halal === "true")
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
DOM.nonhalal.addEventListener("click", function () {
  DOM.menupage.innerHTML = "";
  nonhalal();
});
function nonhalal() {
  menu
    .filter((menu) => menu.halal === "false")
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
