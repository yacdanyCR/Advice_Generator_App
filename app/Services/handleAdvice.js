import { getAdviceApi } from "../Api/getAdviceApi.js";

const handleAdvice = async ($advice__Title, $advice__Mesage) => {
  const data = await getAdviceApi();
  const h6 = document.createElement("h6");
  const p = document.createElement("p");

  h6.append(`Advice  ${data.id}`);
  p.append(data.advice);

  $advice__Title.appendChild(h6);
  $advice__Mesage.appendChild(p);
};

export { handleAdvice };
