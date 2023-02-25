import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
//    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
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

//    function handleSubmit(event) {
//        event.preventDefault();
//        search();
//   }

//    function handleCityChange(event) {
//        setCity(event.target.value);
//    }

//    function search() {
//
//    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-8">
                            <input
                                type="text"
                                placeholder="Type city name here"
                                className="form-control"
                                id="city-input"
                                autoFocus="on"
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
                <WeatherInfo data={weatherData} />
            </div>
         );
    } else {
        const apiKey = "737316554cb62c5b011f4119bc968d2d";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);          
    //    search();
        return "Loading ...";
    }
}