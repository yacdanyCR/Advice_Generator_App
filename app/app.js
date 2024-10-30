import { handleAdvice } from "./Services/handleAdvice.js";

const $advice__Title = document.querySelector(".advice__Title");
const $advice__Mesage = document.querySelector(".advice__Mesage");
const $btn_Advice = document.querySelector("#btn_Advice");

window.addEventListener(
  "DOMContentLoaded",
  handleAdvice($advice__Title, $advice__Mesage)
);

$btn_Advice.addEventListener("click", async () => {
  while ($advice__Title.firstChild && $advice__Mesage.firstChild) {
    $advice__Title.removeChild($advice__Title.firstChild);
    $advice__Mesage.removeChild($advice__Mesage.firstChild);
  }

  await handleAdvice($advice__Title, $advice__Mesage);
});
