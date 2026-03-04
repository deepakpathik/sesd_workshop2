import { Command } from "commander";
import chalk from "chalk";
import GreetCommand from "./commands/greet";
import TimeCommand from "./commands/time";
import RandomNumberCommand from "./commands/randomnum";
import FileInfoCommand from "./commands/fileinfo";
import WordCountCommand from "./commands/wordcount";
import GithubCommand from "./commands/github";
import WeatherCommand from "./commands/weather";
import QuoteCommand from "./commands/quote";

const program: Command = new Command();

program
    .name("devtool")
    .version("1.0.0", "-v, --version", "display the current version")
    .description("A developer productivity CLI tool for managing projects")
    .helpOption("-h, --help", "display available commands and options")
    .action(() => {
        console.log(chalk.green.bold("DevTool CLI initialized"));
        console.log(chalk.dim("Run devtool --help to see available commands"));
    });

const greetCommand = new GreetCommand();

program
    .command("greet")
    .description("greet a user by name")
    .argument("<name>", "name of the person to greet")
    .action((name: string) => {
        greetCommand.execute(name);
    });

program
    .command("info")
    .description("display system and project information")
    .action(() => {
        console.log(chalk.yellow.bold("Project Info"));
        console.log(chalk.white(`  Node.js: ${process.version}`));
        console.log(chalk.white(`  Platform: ${process.platform}`));
        console.log(chalk.white(`  Architecture: ${process.arch}`));
    });

const timeCommand = new TimeCommand();

program
    .command("time")
    .description("display the current system time")
    .action(() => {
        timeCommand.execute();
    });

const randomNumberCommand = new RandomNumberCommand();

program
    .command("randomnum")
    .description("generate a random number between 1 and 100")
    .action(() => {
        randomNumberCommand.execute();
    });

const fileInfoCommand = new FileInfoCommand();

program
    .command("fileinfo")
    .description("display information about a file")
    .argument("<filename>", "path to the file")
    .action((filename: string) => {
        fileInfoCommand.execute(filename);
    });

const wordCountCommand = new WordCountCommand();

program
    .command("wordcount")
    .description("count the number of words in a file")
    .argument("<filename>", "path to the file")
    .action((filename: string) => {
        wordCountCommand.execute(filename);
    });

const githubCommand = new GithubCommand();

program
    .command("github")
    .description("fetch a GitHub user profile")
    .argument("<username>", "GitHub username")
    .action(async (username: string) => {
        await githubCommand.execute(username);
    });

const weatherCommand = new WeatherCommand();

program
    .command("weather")
    .description("fetch current weather for a city")
    .argument("<city>", "city name")
    .action(async (city: string) => {
        await weatherCommand.execute(city);
    });

const quoteCommand = new QuoteCommand();

program
    .command("quote")
    .description("display a random inspirational quote")
    .action(async () => {
        await quoteCommand.execute();
    });

program.parse(process.argv);
