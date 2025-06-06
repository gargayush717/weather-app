import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Weather() {
  const city = useSelector((state) => state.city.value);
  const [weather, setweather] = useState(null);

  useEffect(() => {
    if (!city) return;
    const apikey = '347c2815f13b472da0453035252005';
    axios
      .get(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`)
      .then((res) => {
        setweather(res.data);
      });
  }, [city]);

  return (
    <div className="container">
      {weather && weather.current ? (
        <div className="card text-center my-4 shadow">
          <div className="card-body">
            <h3 className="card-title">{weather.location.name}, {weather.location.country}</h3>
            <h4 className="card-text">Temperature: {weather.current.temp_c}°C</h4>
            <p className="card-text">Condition: {weather.current.condition.text}</p>
            <img src={weather.current.condition.icon} alt="weather icon" />
          </div>
        </div>
      ) : (
        <p className="text-center">Please search for a city to see the weather.</p>
      )}
    </div>
  );
}

export default Weather;
