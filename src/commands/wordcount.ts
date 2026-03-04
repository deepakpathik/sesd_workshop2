import fs from "fs";
import chalk from "chalk";
import Validator from "../utils/validator";

class WordCountCommand {
    execute(filename: string): void {
        if (!Validator.isValidFilePath(filename, "filename")) return;

        if (!fs.existsSync(filename)) {
            console.log(chalk.red(`File not found: ${filename}`));
            return;
        }

        const content = fs.readFileSync(filename, "utf-8");
        const words = content.split(/\s+/).filter((word) => word.length > 0);

        console.log(chalk.green(`Word count for ${chalk.bold(filename)}: ${chalk.bold(String(words.length))}`));
    }
}

export default WordCountCommand;
