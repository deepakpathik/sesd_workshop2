import { Command } from "commander";
import chalk from "chalk";

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

program
    .command("greet")
    .description("display a greeting message")
    .argument("[name]", "your name", "Developer")
    .action((name: string) => {
        console.log(chalk.cyan(`Hello, ${name}! Welcome to DevTool.`));
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

program.parse(process.argv);
