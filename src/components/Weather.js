import React, { useState } from "react";

import WeatherData from "./WeatherData";
function Weather() {
  const [form, setForm] = useState({
    city: "paris",
    country: "france",
  });
  const APIKEY = "80d4c3c7c1d0c2c4d6f308570965e38b";

  const [weather, setWeather] = useState([]);
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "city") {
      setForm({ ...form, city: value });
    }
    if (name === "country") {
      setForm({ ...form, country: value });
    }
    // console.log(form.city, form.country);
  };

  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);
      setWeather({
        data: data,
      });
    }
  }
  return (
    <form>
      <h1> Weather App</h1>
      <input
        type="text"
        name="city"
        placeholder="city"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="city"
        placeholder="country"
        onChange={(e) => handleChange(e)}
      />
      <button
        type="submit"
        className="btn btn-success"
        onClick={(e) => weatherData(e)}
      >
        Submit
      </button>
      {weather.data !== undefined ? (
        <div>
          <WeatherData data={weather.data} />
        </div>
      ) : null}
    </form>
  );
}

export default Weather;
