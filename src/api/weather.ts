import { getWeatherApiUrl } from "../constants/constants";
import { WeatherInfo } from "../types/WeatherInfo";

export async function getWeather(
  latitude: number,
  longitude: number
): Promise<WeatherInfo | void> {
  try {
    const response = await fetch(getWeatherApiUrl(latitude, longitude));
    const data = await response.json();

    const location = data.name;
    const coordinates = {
      latitude: data.coord.lat,
      longitude: data.coord.lon,
    };
    const temperature = Math.round(data.main.temp);
    const weather = data.weather[0].main;

    return {
      coordinates,
      location,
      temperature,
      weather,
    };
  } catch (error) {
    console.error("Error fetching the weather data:", error);
    return;
  }
}
