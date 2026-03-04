import fs from "fs";
import chalk from "chalk";
import { getFileDetails } from "../utils/fileUtils";

class FileInfoCommand {
    execute(filename: string): void {
        if (!fs.existsSync(filename)) {
            console.log(chalk.red(`File not found: ${filename}`));
            return;
        }

        const details = getFileDetails(filename);

        console.log(chalk.blue.bold("File Information"));
        console.log(chalk.white(`  Size: ${details.size}`));
        console.log(chalk.white(`  Last Modified: ${details.lastModified}`));
        console.log(chalk.white(`  Extension: ${details.extension}`));
    }
}

export default FileInfoCommand;
