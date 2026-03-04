import axios, { AxiosResponse } from "axios";

interface GithubUser {
    login: string;
    name: string;
    public_repos: number;
    followers: number;
    bio: string;
}

class GithubService {
    private baseUrl: string = "https://api.github.com";

    async getUser(username: string): Promise<GithubUser> {
        const response: AxiosResponse<GithubUser> = await axios.get(
            `${this.baseUrl}/users/${username}`
        );
        return response.data;
    }
}

export { GithubUser };
export default GithubService;
