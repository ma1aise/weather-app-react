import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
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
          <h1>city</h1>
          <ul>
            <li>date</li>
            <li>description...</li>
          </ul>
          <div className="row">
            <div className="col-6">
              <div className="clearfix">
                <div className="float-left">
                  <span className="temperature">{temperature}</span>
                  <span className="units">
                    <a href="/">°C</a>|<a href="/">°F</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>N/A</li>
                <li>humidity %</li>
                <li>wind Km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "515c9ddbeb3cda9061acfab71031839e";
    let city = "Brisbane";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading ...";
  }
}
