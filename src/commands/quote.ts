import chalk from "chalk";
import QuoteService from "../services/QuoteService";

class QuoteCommand {
    private quoteService: QuoteService;

    constructor() {
        this.quoteService = new QuoteService();
    }

    async execute(): Promise<void> {
        try {
            const quote = await this.quoteService.getRandomQuote();

            console.log();
            console.log(chalk.yellow.bold("  💬 Quote of the Moment"));
            console.log(chalk.dim("  ─────────────────────────────"));
            console.log(chalk.italic.cyan(`  "${quote.content}"`));
            console.log(chalk.dim(`  — ${quote.author}`));
            console.log();
        } catch {
            console.log(chalk.red("\n  ✗ Could not fetch a quote at this time.\n"));
        }
    }
}

export default QuoteCommand;
