import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-4">
                    <span className="bigweather">
                        <h2 id="city">{props.city}</h2>
                        <img src={props.iconUrl} alt={props.description} id="icon" className="float-left" />
                        <span className="temp" id="currenttemperature">{Math.round(props.temperature)}</span>
                        <span className="temp"> °C</span>
                    </span>
                </div>
                <div className="col-1"></div>
                <div className="col-5">
                    <ul className="maintext">
                        <li className="currentime" id="date-time"><FormattedDate date={props.date}/></li>
                        <li>
                            <span className="current-weather text-capitalize" id="description">{props.description}</span>
                        </li>
                        <li>
                            <li>Humidity: <span id="humidity">{props.humidity}</span>%</li>
                            <li>Wind speed: <span id="windSpeed">{Math.round(props.wind)}</span> m/s</li>
                        </li>
                        <br />
                    </ul>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    )
}