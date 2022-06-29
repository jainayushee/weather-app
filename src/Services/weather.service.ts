const axios = require("axios");

async function getCurrentWeather(city: string): Promise<any> {
    const { data } = await axios.get(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=metric`, {
        headers: {
            'X-RapidAPI-Key': '9a0b1522d5mshbbeb4641bd907ecp11f021jsnb5520ce12a8e',
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
        },
      });    
      
      return data;
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
