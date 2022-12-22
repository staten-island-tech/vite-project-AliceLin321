import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
import { menu } from "./menu.js";

const Dom = {
  menupage: document.getElementById("menupage"),
};

menu
  .filter((menu) => menu.vegan === "true")
  .forEach((menu) =>
    Dom.menupage.insertAdjacentHTML("beforeend", `<h1>${menu.name}</h1>`)
  );

  Dom.menupage.insertAdjacentHTML("beforeend")
