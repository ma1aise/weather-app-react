import React from "react";
import "./Weather.css";

export default function Weather() {
  let props = {
    city: "Brisbane",
    date: "Thursday 12:51",
    description: "Mostly Cloudy",
    temperature: 29,
    humidity: 63,
    wind: 8,
  };

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
        <h1>{props.city}</h1>
        <ul>
          <li>{props.date}</li>
          <li>{props.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <div className="float-left">
                <span className="temperature">{props.temperature}</span>
                <span className="units">
                  <a href="#">°C</a>|<a href="#">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>N/A</li>
              <li>{props.humidity} %</li>
              <li>{props.city} Km/h</li>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <a href="https://github.com/ma1aise/weather-app-conversion">
          Open-source code
        </a>
        , by Lisa Wells
      </footer>
    </div>
  );
}
