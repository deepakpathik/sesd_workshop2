import chalk from "chalk";

class RandomNumberCommand {
    execute(): void {
        const num = Math.floor(Math.random() * 100) + 1;
        console.log(chalk.magenta(`Your random number: ${chalk.bold(String(num))}`));
    }
}

export default RandomNumberCommand;
