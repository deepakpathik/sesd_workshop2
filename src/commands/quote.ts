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

            console.log(chalk.italic.cyan(`\n"${quote.content}"`));
            console.log(chalk.dim(`  — ${quote.author}\n`));
        } catch {
            console.log(chalk.red("Could not fetch a quote at this time."));
        }
    }
}

export default QuoteCommand;
