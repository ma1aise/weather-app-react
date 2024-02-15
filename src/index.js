import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";
import "./Weather.css";
import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather defaultCity="Brisbane" />
      <footer>
        This project was coded by Lisa Wells and is{" "}
        <a href="https://github.com/ma1aise/weather-app-conversion">
          Open-sourced on Github
        </a>
      </footer>
    </div>
  </StrictMode>
);
