import React, { useEffect, useState } from 'react'
import Current from './Current'
import Forecast from './Forecast'
import Navbar from './Navbar'
import './Home.css'
import { WeatherDataService } from '../Services/weather.service';

export default function Home() {
    const [weatherData, setWeatherData] = useState();
    const [flag, setFlag] = useState(false)
    const [city, setCity] = useState("Bangalore")

    const getWeatherDetails = async () => {
        const response = WeatherDataService.getCurrentWeather(city)
        setWeatherData(await response);
        setFlag(!flag)
    }

    useEffect(() => {
        console.log(city);
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
                    <Forecast data={weatherData} />
                </div>
            </div>
        </div>
    )
}
