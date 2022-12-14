import { useState } from "react";
import axios from "axios";
import Time from "./Time";

function Weather() {
  const [input, setInput] = useState("");

  const [weather, setWeather] = useState({});

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const buttonClick = () => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=746872794bc9fa0c6f8df96aca790da3`
    )
      .then((res) => res.data)
      .then((result) => setWeather(result));
  };

  console.log({ weather });

  return (
    <div className="container">
      <div className="main_title">
        <h1 className="title"> Weather</h1>
        <img
          className="gif"
          src="https://media.tenor.com/ELtvRmeTcTYAAAAM/earth.gif"
          alt="earth.gif"
        />
      </div>
      <div className="search">
        <input
          className="input"
          type="text"
          placeholder="Enter city..."
          onChange={handleChange}
        />
        <button className="button" onClick={buttonClick}>
          Search
        </button>
      </div>
      {typeof weather.main != "undefined" ? (
        <div className="content">
          {/* Location */}
          <p className="name">
            {weather.name}, {weather.sys.country}
          </p>

          {/* Time */}
          <Time />

          {/* icon */}
          <div>
            <img
              className="icon"
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt=""
            />
          </div>

          {/* Condition */}
          <p className="condition">{weather.weather[0].description}</p>

          {/* Temperature Celcius*/}
          <p className="temp">{Math.round(weather.main.temp)} °C </p>

          {/* Temperature-Min/Max Celcius*/}
          <p className="temp_min-max">
            {Math.round(weather.main.temp_max)} °{" "}
            <span className="temp_min">
              {Math.round(weather.main.temp_min)} °
            </span>
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Weather;
