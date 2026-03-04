import fs from "fs";
import chalk from "chalk";
import Validator from "../utils/validator";

class WordCountCommand {
    execute(filename: string): void {
        if (!Validator.isValidFilePath(filename, "filename")) return;

        if (!fs.existsSync(filename)) {
            console.log(chalk.red(`\n  ✗ File not found: ${filename}\n`));
            return;
        }

        const content = fs.readFileSync(filename, "utf-8");
        const words = content.split(/\s+/).filter((word) => word.length > 0);

        console.log();
        console.log(chalk.green.bold("  📝 Word Count"));
        console.log(chalk.dim("  ─────────────────────────────"));
        console.log(chalk.white(`  File    ${chalk.cyan(filename)}`));
        console.log(chalk.white(`  Words   ${chalk.cyan.bold(String(words.length))}`));
        console.log();
    }
}

export default WordCountCommand;
