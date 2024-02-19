import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="Weather">
          <form className="search-form" id="search-form">
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Type a city..."
                  autoFocus="on"
                  autoComplete="off"
                  id="city-input"
                  className="form-control shadow-sm"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="form-control btn btn-success shadow-sm w-100"
                />
              </div>
              <div className="col-3">
                <button
                  className="btn btn-secondary w-100"
                  id="current-location-button"
                >
                  Current
                </button>
              </div>
            </div>
          </form>
          <WeatherInfo data="weatherData" />
        </div>
      </div>
    );
  } else {
    const apiKey = "515c9ddbeb3cda9061acfab71031839e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading ...";
  }
}
