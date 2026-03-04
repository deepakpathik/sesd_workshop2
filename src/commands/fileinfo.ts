import fs from "fs";
import chalk from "chalk";
import Validator from "../utils/validator";
import { getFileDetails } from "../utils/fileUtils";

class FileInfoCommand {
    execute(filename: string): void {
        if (!Validator.isValidFilePath(filename, "filename")) return;

        if (!fs.existsSync(filename)) {
            console.log(chalk.red(`\n  ✗ File not found: ${filename}\n`));
            return;
        }

        const details = getFileDetails(filename);

        console.log();
        console.log(chalk.blue.bold("  📄 File Information"));
        console.log(chalk.dim("  ─────────────────────────────"));
        console.log(chalk.white(`  File       ${chalk.green(filename)}`));
        console.log(chalk.white(`  Size       ${chalk.green(details.size)}`));
        console.log(chalk.white(`  Modified   ${chalk.green(details.lastModified)}`));
        console.log(chalk.white(`  Extension  ${chalk.green(details.extension)}`));
        console.log();
    }
}

export default FileInfoCommand;
