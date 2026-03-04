import chalk from "chalk";

class GreetCommand {
    execute(name: string): void {
        console.log(chalk.cyan(`Hello ${name}, welcome to DevTool CLI`));
    }
}

export default GreetCommand;
