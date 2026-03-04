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
import JokeCommand from "./commands/joke";

const program: Command = new Command();

const greetCommand = new GreetCommand();
const timeCommand = new TimeCommand();
const randomNumberCommand = new RandomNumberCommand();
const fileInfoCommand = new FileInfoCommand();
const wordCountCommand = new WordCountCommand();
const githubCommand = new GithubCommand();
const weatherCommand = new WeatherCommand();
const quoteCommand = new QuoteCommand();
const jokeCommand = new JokeCommand();

program
    .name("devtool")
    .version("1.0.0", "-v, --version", "output the current version")
    .description(
        chalk.cyan.bold("DevTool CLI") +
        chalk.dim(" — a developer productivity toolkit\n\n") +
        chalk.white("  Available command categories:\n") +
        chalk.yellow("    General    ") + chalk.dim("greet, time, randomnum, info\n") +
        chalk.yellow("    Files      ") + chalk.dim("fileinfo, wordcount\n") +
        chalk.yellow("    API        ") + chalk.dim("github, weather, quote, joke")
    )
    .helpOption("-h, --help", "show all available commands and options")
    .action(() => {
        console.log();
        console.log(chalk.cyan.bold("  ⚡ DevTool CLI v1.0.0"));
        console.log(chalk.dim("  ─────────────────────────────"));
        console.log(chalk.green("  Ready to boost your productivity!"));
        console.log();
        console.log(chalk.white("  Run ") + chalk.yellow("devtool --help") + chalk.white(" to see all commands."));
        console.log(chalk.white("  Run ") + chalk.yellow("devtool <command> --help") + chalk.white(" for command details."));
        console.log();
    });

program
    .command("greet")
    .description("greet a user with a personalized welcome message")
    .argument("<name>", "name of the person to greet")
    .action((name: string) => {
        greetCommand.execute(name);
    });

program
    .command("info")
    .description("show Node.js version, platform, and architecture")
    .action(() => {
        console.log();
        console.log(chalk.yellow.bold("  📋 System Info"));
        console.log(chalk.dim("  ─────────────────────────────"));
        console.log(chalk.white(`  Node.js      ${chalk.green(process.version)}`));
        console.log(chalk.white(`  Platform     ${chalk.green(process.platform)}`));
        console.log(chalk.white(`  Architecture ${chalk.green(process.arch)}`));
        console.log();
    });

program
    .command("time")
    .description("display the current system date and time")
    .action(() => {
        timeCommand.execute();
    });

program
    .command("randomnum")
    .description("generate a random number between 1 and 100")
    .action(() => {
        randomNumberCommand.execute();
    });

program
    .command("fileinfo")
    .description("show file size, last modified time, and extension")
    .argument("<filename>", "path to the target file")
    .action((filename: string) => {
        fileInfoCommand.execute(filename);
    });

program
    .command("wordcount")
    .description("count total words in a text file")
    .argument("<filename>", "path to the target file")
    .action((filename: string) => {
        wordCountCommand.execute(filename);
    });

program
    .command("github")
    .description("fetch a GitHub user profile with repo and follower stats")
    .argument("<username>", "GitHub username to look up")
    .action(async (username: string) => {
        await githubCommand.execute(username);
    });

program
    .command("weather")
    .description("get current temperature, humidity, and conditions for a city")
    .argument("<city>", "city name to check weather for")
    .action(async (city: string) => {
        await weatherCommand.execute(city);
    });

program
    .command("quote")
    .description("display a random inspirational quote with its author")
    .action(async () => {
        await quoteCommand.execute();
    });

program
    .command("joke")
    .description("tell a random joke with setup and punchline")
    .action(async () => {
        await jokeCommand.execute();
    });

program.parse(process.argv);
