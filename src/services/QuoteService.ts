import axios, { AxiosResponse } from "axios";

interface Quote {
    content: string;
    author: string;
}

class QuoteService {
    private baseUrl: string = "https://api.quotable.io";

    async getRandomQuote(): Promise<Quote> {
        const response: AxiosResponse = await axios.get(
            `${this.baseUrl}/random`
        );

        return {
            content: response.data.content,
            author: response.data.author,
        };
    }
}

export { Quote };
export default QuoteService;
