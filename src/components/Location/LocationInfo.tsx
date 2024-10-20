import { WeatherInfo } from "../../types/WeatherInfo";

type LocationInfoProps = {
  loading: boolean;
  weatherInfo: WeatherInfo | null;
  currentTime: string;
};

export default function LocationInfo({ loading = false, weatherInfo, currentTime }: Readonly<LocationInfoProps>) {
  return (
    <div>
      {(!loading && weatherInfo) && (
        <div className="p-4 lg:p-6 h-full flex flex-col font-medium smooth-text-color tracking-tight">
          <span className="text-sm">
            Based in
          </span>
          <div className="h-full flex lg:flex-col justify-between">
            <div>
              <p className="default-text-color font-bold text-lg">São Paulo, Brazil</p>
              <span className="text-sm">{weatherInfo.coordinates.latitude}, {weatherInfo.coordinates.longitude}</span>
            </div>

            <div>
              <div className="flex items-center">
                <p className="default-text-color font-bold text-lg">{currentTime}</p>
                &nbsp;
                <span className="text-sm">GMT-3</span>
              </div>

              <div className="flex items-center justify-start">
                <p className="default-text-color font-bold text-lg">{weatherInfo.temperature}°C</p>
                &nbsp;
                <span className="text-sm">{weatherInfo.weather}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
