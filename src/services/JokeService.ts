import axios, { AxiosResponse } from "axios";

interface Joke {
    setup: string;
    punchline: string;
}

class JokeService {
    private baseUrl: string = "https://official-joke-api.appspot.com/random_joke";

    async getRandomJoke(): Promise<Joke> {
        const response: AxiosResponse = await axios.get(this.baseUrl);

        return {
            setup: response.data.setup,
            punchline: response.data.punchline,
        };
    }
}

export { Joke };
export default JokeService;
