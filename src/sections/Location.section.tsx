import { useState, useEffect } from "react";
import { getWeather } from "../api/weather";
import Card from "../components/Card/Card";
import { WeatherInfo } from "../types/WeatherInfo";
import { getCurrentTime } from "../utils/time";
import LocationMap from "../components/Location/LocationMap";
import LocationInfo from "../components/Location/LocationInfo";
import { COORDINATES, MAP_SP_BR, TIMEZONES } from "../constants/constants";

export default function LocationSection() {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null);

  const [loading, setLoading] = useState(true);

  const map = { ...MAP_SP_BR }
  const coordinates = COORDINATES.SAO_PAULO;
  const timezones = TIMEZONES.SAO_PAULO;

  useEffect(() => {
    async function fetchWeather() {
      try {
        const weatherData = await getWeather(coordinates.LATITUDE, coordinates.LONGITUDE);
        if (weatherData) setWeatherInfo(weatherData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [coordinates]);

  return (
    <Card
      classNames="lg:row-span-2 lg:col-start-7 lg:row-start-1 rounded-lg lg:col-span-6"
      contentClassnames="w-full h-full"
      loading={loading}
    >
      <div className="flex flex-col lg:flex-row h-full">
        <LocationMap map={map} info={!!weatherInfo} />
        {weatherInfo && (<LocationInfo loading={loading} weatherInfo={weatherInfo} currentTime={getCurrentTime(timezones)} />)}
      </div>
    </Card>
  );
}
