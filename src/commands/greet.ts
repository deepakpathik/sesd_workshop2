import chalk from "chalk";
import Validator from "../utils/validator";

class GreetCommand {
    execute(name: string): void {
        if (!Validator.isNotEmpty(name, "name")) return;

        console.log();
        console.log(chalk.cyan.bold(`  👋 Hello ${name}, welcome to DevTool CLI`));
        console.log();
    }
}

export default GreetCommand;
