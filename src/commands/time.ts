import chalk from "chalk";

class TimeCommand {
    execute(): void {
        const now = new Date();
        console.log(chalk.yellow(`Current time: ${now.toLocaleString()}`));
    }
}

export default TimeCommand;
