import React, { useEffect, useState } from 'react'
import Current from './Current'
import Forecast from './Forecast'
import Navbar from './Navbar'
import './Home.css'
import { WeatherDataService } from '../Services/weather.service';

export default function Home() {
    const [weatherData, setWeatherData] = useState();
    const [forecastData, setForecastData] = useState();
    const [flag, setFlag] = useState(false)
    const [city, setCity] = useState("Bangalore")

    const getWeatherDetails = () => {
        WeatherDataService.getCurrentWeather(city).then((res) => {
            setWeatherData(res);            
        })

        
        
    }
    const getForecastDetails = () => {
        WeatherDataService.get5DayForecast(city).then((res) => {
            setForecastData(res);            
        })
        
            
    }

    useEffect(() => {
        
        getForecastDetails()
        getWeatherDetails()
    }, [city])

    return (
        <div className='home-wrapper'>
            <div className="nav"><Navbar setCity={setCity} /></div>
            <div className="main-content">
                <div className="current-card">
                    {weatherData && <Current data={weatherData} />}
                </div>
                <div className="detail-card">
                    {forecastData && <Forecast data={forecastData} />}
                </div>
            </div>
        </div>
    )
}
