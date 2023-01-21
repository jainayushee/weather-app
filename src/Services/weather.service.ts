
import current from "../MockResponse/current";
const axios = require("axios");

async function getCurrentWeather(city: string): Promise<any> {
    const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=047b14b36768b0389ec24e6ccd33f3a8`, {

    });

    return data;
}

async function get5DayForecast(city: string): Promise<any> {

    const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=047b14b36768b0389ec24e6ccd33f3a8`, {

    });

    return data;
}






export const WeatherDataService = {
    getCurrentWeather: getCurrentWeather,
    get5DayForecast: get5DayForecast
};
