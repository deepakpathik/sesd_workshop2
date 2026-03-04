import axios, { AxiosResponse } from "axios";

interface Quote {
    content: string;
    author: string;
}

class QuoteService {
    private baseUrl: string = "https://dummyjson.com/quotes/random";

    async getRandomQuote(): Promise<Quote> {
        const response: AxiosResponse = await axios.get(this.baseUrl);

        return {
            content: response.data.quote,
            author: response.data.author,
        };
    }
}

export { Quote };
export default QuoteService;
