import React, { useEffect, useState } from 'react'
import Current from './Current'
import Forecast from './Forecast'
import Navbar from './Navbar'
import './Home.css'
// import { WeatherDataService } from '../Services/weather.service';

export default function Home() {
    const [weatherData, setWeatherData] = useState();
    const [flag]= useState(false)
    
    useEffect(() => {
        // WeatherDataService.getCurrentWeather().then((res) => {
        //     setWeatherData(res);
        // })

        // WeatherDataService.get30DayForecast().then((res)=> {
        //     console.log(res);
            
        // })
    }, [flag])

    return (
        <div className='home-wrapper'>
            <div className="nav"><Navbar /></div>
            <div className="main-content">
                <div className="current-card">
                    <Current data={weatherData}/>
                </div>
                <div className="detail-card">
                    <Forecast data={weatherData} />
                </div>
            </div>
        </div>
    )
}
