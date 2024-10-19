import images from "../assets/images";

export const MAP_SP_BR = {
  imgSrc: images.maps.spbr,
  alt: "São Paulo Downtown Map",
  link: "https://www.openstreetmap.org/#map=13/-23.55085/-46.63130",
};

export const DEVTO_API_MY_POSTS = "https://dev.to/api/articles?username=rcrd";

export const TIMEZONES = {
  SAO_PAULO: "America/Sao_Paulo",
};

export const COORDINATES = {
  SAO_PAULO: {
    LATITUDE: -23.5506507,
    LONGITUDE: -46.6333824,
  },
};

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const getWeatherApiUrl = (
  latitude: number,
  longitude: number
): string => {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
};
