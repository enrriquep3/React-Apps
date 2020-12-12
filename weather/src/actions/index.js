import axios from "axios";
const API_KEY = "3dd89888b51ffb9198ac37effbf7848a";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

 
  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
