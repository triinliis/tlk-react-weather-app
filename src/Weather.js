import React from "react";
import "./Weather.css";

export default function Weather() {
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
                        <h2 id="city">Tallinn</h2>
                        <img src="http://openweathermap.org/img/wn/09n@2x.png" alt="Clear" id="icon" className="float-left" />
                        <span className="temp" id="currenttemperature"> -2°</span>
                        <span className="temp"> °C</span>
                    </span>
                </div>
                <div className="col-1"></div>
                <div className="col-5">
                    <ul className="maintext">
                        <li className="currentime" id="date-time">Thursday, Jan 26 ⏱ 00:45</li>
                        <li>
                            <span className="current-weather" id="description"> Drizzle </span>
                        </li>
                        <li>
                            <li>Humidity: <span id="humidity">95</span>%</li>
                            <li>Wind speed: <span id="windSpeed">6</span> m/s</li>
                        </li>
                        <br />
                    </ul>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    )
}