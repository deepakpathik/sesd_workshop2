import chalk from "chalk";

class RandomNumberCommand {
    execute(): void {
        const num = Math.floor(Math.random() * 100) + 1;
        console.log();
        console.log(chalk.magenta.bold("  🎲 Random Number"));
        console.log(chalk.dim("  ─────────────────────────────"));
        console.log(chalk.white(`  Result: ${chalk.green.bold(String(num))}`));
        console.log();
    }
}

export default RandomNumberCommand;
