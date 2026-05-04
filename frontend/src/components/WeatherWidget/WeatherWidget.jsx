import { useState, useEffect } from 'react';
import './WeatherWidget.css';

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState('Kyiv');

  const API_KEY = '5ac6b4d98a961d3f45f6aafc4120dd63';
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(API_URL);
        
        if (!response.ok) {
          throw new Error('Дані про погоду недоступні');
        }
        
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location, API_URL]);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleRefresh = () => {
    setWeather(null);
    setLoading(true);
  };

  if (loading) {
    return (
      <div className="weather-widget loading">
        <div className="loading-spinner"></div>
        <p>Завантаження даних про погоду...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="weather-widget error">
        <p>Помилка: {error}</p>
        <button onClick={handleRefresh} className="refresh-btn">
          Спробувати знову
        </button>
      </div>
    );
  }

  return (
    <div className="weather-widget">
      <div className="weather-header">
        <h3>Погода в {weather.name}</h3>
        <select 
          value={location}
          onChange={handleLocationChange}
          className="location-select"
        >
          <option value="Kyiv">Київ</option>
          <option value="Lviv">Львів</option>
          <option value="Odesa">Одеса</option>
          <option value="Kharkiv">Харків</option>
        </select>
      </div>
      
      <div className="weather-main">
        <div className="weather-icon">
          <img 
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
            alt={weather.weather[0].description} 
          />
        </div>
        
        <div className="weather-temp">
          <span className="temp">{Math.round(weather.main.temp)}°C</span>
          <span className="feels-like">
            Відчувається як: {Math.round(weather.main.feels_like)}°C
          </span>
        </div>
      </div>
      
      <div className="weather-details">
        <div className="detail">
          <span>Вологість</span>
          <span>{weather.main.humidity}%</span>
        </div>
        <div className="detail">
          <span>Вітер</span>
          <span>{Math.round(weather.wind.speed * 3.6)} км/год</span>
        </div>
        <div className="detail">
          <span>Тиск</span>
          <span>{weather.main.pressure} гПа</span>
        </div>
      </div>
      
      <button onClick={handleRefresh} className="refresh-btn">
        Оновити
      </button>
    </div>
  );
}

export default WeatherWidget;