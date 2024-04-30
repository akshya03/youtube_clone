import axios from "axios";
import {data} from "./data";

const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
    // method: 'GET',
    // url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI = async (url) =>{
    // console.log(process.env.REACT_APP_RAPID_API_KEY);
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    // const data1 = await data;
    // console.log(data);
    // console.log(data1);
    return data;
}