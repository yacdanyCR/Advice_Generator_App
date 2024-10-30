import { getAdviceApi } from "./Api/getAdviceApi.js";

const $advice__Title = document.querySelector(".advice__Title");
const $advice__Mesage = document.querySelector(".advice__Mesage");

const app = async () => {
  const data = await getAdviceApi();
  const h6 = document.createElement("h6");
  const p = document.createElement("p");

  h6.append(`Advice  ${data.id}`);
  p.append(data.advice);

  $advice__Title.appendChild(h6);
  $advice__Mesage.appendChild(p);
};

app();
