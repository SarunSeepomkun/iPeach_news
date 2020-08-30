import axios from "axios";

export const GetNewsList = async (props) => {
  const URL = "https://newsapi.org/v2/top-headlines?country=th";
  const API_KEY = "&apiKey=733cac916ec242ddb943eedf444d2ca5";

  let changeAbleURL = `${URL}${API_KEY}`;
  try {
    let { data } = await axios.get(changeAbleURL);

    return data;
  } catch (error) {
    return `Error : cannot get data from newsapi.org ${error}`;
  }
};
