import chalk from "chalk";
import JokeService from "../services/JokeService";

class JokeCommand {
    private jokeService: JokeService;

    constructor() {
        this.jokeService = new JokeService();
    }

    async execute(): Promise<void> {
        try {
            const joke = await this.jokeService.getRandomJoke();

            console.log();
            console.log(chalk.yellow.bold("  😂 Random Joke"));
            console.log(chalk.dim("  ─────────────────────────────"));
            console.log(chalk.white(`  ${joke.setup}`));
            console.log(chalk.green.bold(`  ${joke.punchline}`));
            console.log();
        } catch {
            console.log(chalk.red("\n  ✗ Could not fetch a joke at this time.\n"));
        }
    }
}

export default JokeCommand;
