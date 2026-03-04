import chalk from "chalk";
import WeatherService from "../services/WeatherService";

class WeatherCommand {
    private weatherService: WeatherService;

    constructor() {
        this.weatherService = new WeatherService();
    }

    async execute(city: string): Promise<void> {
        try {
            const data = await this.weatherService.getWeather(city);

            console.log(chalk.blue.bold(`\nWeather in ${data.city}`));
            console.log(chalk.white(`  Temperature: ${data.temperature}°C`));
            console.log(chalk.white(`  Humidity: ${data.humidity}%`));
            console.log(chalk.white(`  Condition: ${data.description}`));
            console.log(chalk.white(`  Wind Speed: ${data.windspeed} km/h`));
        } catch {
            console.log(chalk.red(`Could not fetch weather for: ${city}`));
        }
    }
}

export default WeatherCommand;
