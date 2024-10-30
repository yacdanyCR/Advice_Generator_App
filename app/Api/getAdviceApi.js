const API_URL = "https://api.adviceslip.com/advice";

const getAdviceApi = async () => {
  try {
    const data = await fetch(API_URL);
    const json = await data.json();
    return json.slip;
  } catch (error) {
    console.log(error);
  }
};

export { getAdviceApi };
