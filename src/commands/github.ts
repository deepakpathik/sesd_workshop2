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

            console.log(chalk.blue.bold("\nGitHub Profile"));
            console.log(chalk.white(`  Username: ${user.login}`));
            console.log(chalk.white(`  Public Repos: ${user.public_repos}`));
            console.log(chalk.white(`  Followers: ${user.followers}`));
            console.log(chalk.white(`  Profile URL: ${chalk.underline(user.html_url)}`));
        } catch {
            console.log(chalk.red(`Could not find GitHub user: ${username}`));
        }
    }
}

export default GithubCommand;
