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

            console.log(chalk.yellow(`\n${joke.setup}`));
            console.log(chalk.green.bold(`${joke.punchline}\n`));
        } catch {
            console.log(chalk.red("Could not fetch a joke at this time."));
        }
    }
}

export default JokeCommand;
