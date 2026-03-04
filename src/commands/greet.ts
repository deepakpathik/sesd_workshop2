import chalk from "chalk";
import Validator from "../utils/validator";

class GreetCommand {
    execute(name: string): void {
        if (!Validator.isNotEmpty(name, "name")) return;

        console.log(chalk.cyan(`Hello ${name}, welcome to DevTool CLI`));
    }
}

export default GreetCommand;
