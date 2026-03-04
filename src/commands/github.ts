import chalk from "chalk";
import Validator from "../utils/validator";
import GithubService from "../services/GithubService";

class GithubCommand {
    private githubService: GithubService;

    constructor() {
        this.githubService = new GithubService();
    }

    async execute(username: string): Promise<void> {
        if (!Validator.isAlphanumeric(username, "username")) return;

        try {
            const user = await this.githubService.getUser(username);

            console.log();
            console.log(chalk.blue.bold("  🐙 GitHub Profile"));
            console.log(chalk.dim("  ─────────────────────────────"));
            console.log(chalk.white(`  Username     ${chalk.green(user.login)}`));
            console.log(chalk.white(`  Repos        ${chalk.green(String(user.public_repos))}`));
            console.log(chalk.white(`  Followers    ${chalk.green(String(user.followers))}`));
            console.log(chalk.white(`  Profile      ${chalk.cyan.underline(user.html_url)}`));
            console.log();
        } catch {
            console.log(chalk.red(`\n  ✗ Could not find GitHub user: ${username}\n`));
        }
    }
}

export default GithubCommand;
