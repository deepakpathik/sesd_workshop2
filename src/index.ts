import { Command } from "commander";
import chalk from "chalk";
import GreetCommand from "./commands/greet";
import TimeCommand from "./commands/time";

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

program.parse(process.argv);
