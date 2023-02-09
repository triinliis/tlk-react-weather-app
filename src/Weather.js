import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.weather[0].description,
            iconUrl: "http://openweathermap.org/img/wn/09n@2x.png",
        });
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form id="search-form">
                    <div className="row">
                        <div className="col-8">
                            <input
                                type="text"
                                placeholder="Type city name here"
                                className="form-control"
                                id="city-input"
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
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-4">
                        <span className="bigweather">
                            <h2 id="city">{weatherData.city}</h2>
                            <img src={weatherData.iconUrl} alt={weatherData.description} id="icon" className="float-left" />
                            <span className="temp" id="currenttemperature">{Math.round(weatherData.temperature)}</span>
                            <span className="temp"> °C</span>
                        </span>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-5">
                        <ul className="maintext">
                            <li className="currentime" id="date-time"><FormattedDate date={weatherData.date}/></li>
                            <li>
                                <span className="current-weather text-capitalize" id="description">{weatherData.description}</span>
                            </li>
                            <li>
                                <li>Humidity: <span id="humidity">{weatherData.humidity}</span>%</li>
                                <li>Wind speed: <span id="windSpeed">{Math.round(weatherData.wind)}</span> m/s</li>
                            </li>
                            <br />
                        </ul>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
         );
    } else {        
        const apiKey = "737316554cb62c5b011f4119bc968d2d";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;;
        axios.get(apiUrl).then(handleResponse);

        return "Loading ...";
    }
}