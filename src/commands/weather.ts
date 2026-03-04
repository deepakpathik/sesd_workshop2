import chalk from "chalk";
import Validator from "../utils/validator";
import WeatherService from "../services/WeatherService";

class WeatherCommand {
    private weatherService: WeatherService;

    constructor() {
        this.weatherService = new WeatherService();
    }

    async execute(city: string): Promise<void> {
        if (!Validator.hasMinLength(city, 2, "city")) return;

        try {
            const data = await this.weatherService.getWeather(city);

            console.log();
            console.log(chalk.blue.bold(`  🌤  Weather in ${data.city}`));
            console.log(chalk.dim("  ─────────────────────────────"));
            console.log(chalk.white(`  Temp       ${chalk.green(data.temperature + "°C")}`));
            console.log(chalk.white(`  Humidity   ${chalk.green(data.humidity + "%")}`));
            console.log(chalk.white(`  Condition  ${chalk.green(data.description)}`));
            console.log(chalk.white(`  Wind       ${chalk.green(data.windspeed + " km/h")}`));
            console.log();
        } catch {
            console.log(chalk.red(`\n  ✗ Could not fetch weather for: ${city}\n`));
        }
    }
}

export default WeatherCommand;
