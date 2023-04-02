import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast"
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
   }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    function search() {
        const apiKey = "737316554cb62c5b011f4119bc968d2d";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-8">
                            <input
                                type="text"
                                placeholder="Type city name here"
                                className="form-control"
                                id="city-input"
                                autoFocus="on"
                                onChange={handleCityChange}
                            />
                        </div>
                        <div className="col-2">
                            <input type="submit" value="Search" className="btn btn-secondary" />
                        </div>
                        <div class="col-2">
                            <button type="button" className="btn btn-secondary" id="current-location-but">
                                📍
                            </button>
                        </div>
                    </div>
                </form>
                <br />
                <WeatherInfo data={weatherData}/>
                <WeatherForecast />
            </div>
         );
    } else {
        search();
        return "Loading ...";
    }
}