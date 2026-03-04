import axios, { AxiosResponse } from "axios";

interface WeatherData {
    temperature: number;
    humidity: number;
    description: string;
    windspeed: number;
}

interface GeoLocation {
    latitude: number;
    longitude: number;
    name: string;
}

class WeatherService {
    private geoUrl: string = "https://geocoding-api.open-meteo.com/v1/search";
    private weatherUrl: string = "https://api.open-meteo.com/v1/forecast";

    async getWeather(city: string): Promise<WeatherData & { city: string }> {
        const geoResponse: AxiosResponse = await axios.get(this.geoUrl, {
            params: { name: city, count: 1 },
        });

        const location: GeoLocation = geoResponse.data.results[0];

        const weatherResponse: AxiosResponse = await axios.get(this.weatherUrl, {
            params: {
                latitude: location.latitude,
                longitude: location.longitude,
                current_weather: true,
                hourly: "relative_humidity_2m",
            },
        });

        const current = weatherResponse.data.current_weather;
        const humidity = weatherResponse.data.hourly.relative_humidity_2m[0];

        return {
            city: location.name,
            temperature: current.temperature,
            humidity,
            description: this.getWeatherDescription(current.weathercode),
            windspeed: current.windspeed,
        };
    }

    private getWeatherDescription(code: number): string {
        const descriptions: Record<number, string> = {
            0: "Clear sky",
            1: "Mainly clear",
            2: "Partly cloudy",
            3: "Overcast",
            45: "Foggy",
            48: "Rime fog",
            51: "Light drizzle",
            61: "Slight rain",
            63: "Moderate rain",
            65: "Heavy rain",
            71: "Slight snow",
            73: "Moderate snow",
            75: "Heavy snow",
            95: "Thunderstorm",
        };
        return descriptions[code] || "Unknown";
    }
}

export { WeatherData };
export default WeatherService;
