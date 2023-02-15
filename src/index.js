import { worker } from "./mocks/browser.js";

worker.start();

const $btn = document.getElementById("btn");
const $btn2 = document.getElementById("btn2");

$btn.addEventListener("click", () => {
  fetch("/login", {
    method: "POST",
  });
});

$btn2.addEventListener("click", () => {
  fetch("/user");
});
