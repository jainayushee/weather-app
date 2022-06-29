const axios = require("axios");

async function getCurrentWeather(): Promise<any> {
    const options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {
            q: 'London,uk',
            lat: '0',
            lon: '0',
            callback: 'test',
            id: '2172797',
            lang: 'null',
            units: 'imperial',
            mode: 'xml'
        },
        headers: {
            'X-RapidAPI-Key': '9a0b1522d5mshbbeb4641bd907ecp11f021jsnb5520ce12a8e',
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response: { data: any; }) {
        console.log(response.data);
    }).catch(function (error: any) {
        console.error(error);
    });
}

async function get30DayForecast(): Promise<any> {

    const options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/climate/month',
        params: { q: 'San Francisco' },
        headers: {
            'X-RapidAPI-Key': '9a0b1522d5mshbbeb4641bd907ecp11f021jsnb5520ce12a8e',
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response: { data: any; }) {
        console.log(response.data);
    }).catch(function (error: any) {
        console.error(error);
    });
}






export const WeatherDataService = {
    getCurrentWeather: getCurrentWeather,
    get30DayForecast: get30DayForecast
};
