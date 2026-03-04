import chalk from "chalk";

class TimeCommand {
    execute(): void {
        const now = new Date();
        console.log();
        console.log(chalk.yellow.bold("  🕐 Current Time"));
        console.log(chalk.dim("  ─────────────────────────────"));
        console.log(chalk.white(`  ${now.toLocaleString()}`));
        console.log();
    }
}

export default TimeCommand;
