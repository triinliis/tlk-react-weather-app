import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon"
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
            <div className="Weatherinfo">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-4">
                        <span className="bigweather">
                            <h2 id="city">{props.data.city}</h2>
                            <span className="float-left">    
                                <WeatherIcon code={props.data.icon} size={52}/>
                            </span>
                            <WeatherTemperature celsius={props.data.temperature} />
                        </span>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-5">
                        <ul className="maintext">
                            <li className="currentime" id="date-time"><FormattedDate date={props.data.date}/></li>
                            <li>
                                <span className="current-weather text-capitalize" id="description">{props.data.description}</span>
                            </li>
                            <li>
                                <li>Humidity: <span id="humidity">{props.data.humidity}</span>%</li>
                                <li>Wind speed: <span id="windSpeed">{Math.round(props.data.wind)}</span> m/s</li>
                            </li>
                            <br />
                        </ul>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>    
    );
}