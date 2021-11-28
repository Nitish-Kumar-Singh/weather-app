import React from "react";

function WeatherData(props) {
  const { data } = props;
  const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod !== 404 ? data.weather[0].icon : null}` +
    ".png";
  const d = new Date();

  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  let day = weekday[d.getDay()];

  console.log(props);
  return (
    <div>
      <div className="Card Loading">
        <div class="Card-1">
          <div class="part1">
            <h2 class="Day">{day}</h2>
            <div class="Date">{new Date().toLocaleDateString()}</div>
            <div class="Location">
              <i class="fas fa-map-marker-alt"></i>
              <span class="City">
                {data.name},{data.sys.country}{" "}
              </span>
            </div>
          </div>
          <div class="part2">
            <img src={iconurl} alt="" class="icon" height="90px" width="90px" />
            <h1 class="Temp">{Math.floor(data.main.temp - 273.15)}</h1>
            <div class="Description"> {data.weather[0].description}</div>
          </div>
        </div>

        <div class="Card-2">
          <table cellpadding="4">
            <tr>
              <td>High/Low</td>
              <td>
                {Math.floor(data.main.temp_max - 273.15)}/
                {Math.floor(data.main.temp_min - 273.15)}
              </td>
            </tr>
            <tr>
              <td>HUMIDITY</td>
              <td>{data.main.humidity} %</td>
            </tr>
            <tr>
              <td>Pressure</td>
              <td>{data.main.pressure} hPa</td>
            </tr>
            <tr>
              <td>Visibility</td>
              <td>{data.visibility / 1000} Km</td>
            </tr>
            <tr>
              <td>Wind</td>
              <td>{Math.floor((data.wind.speed * 18) / 5)} km/hr</td>
            </tr>
            <tr>
              <td>Wind Direction</td>
              <td>
                {" "}
                {data.wind.deg}
                <sup>o</sup> deg
              </td>
            </tr>
            <tr>
              <td>Sunrise</td>
              <td> {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</td>
            </tr>
            <tr>
              <td>Sunset</td>
              <td>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default WeatherData;
