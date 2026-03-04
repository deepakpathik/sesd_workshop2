# ⚡ DevTool CLI

A developer productivity command-line toolkit built with **Node.js**, **TypeScript**, and **Commander.js**. Provides quick access to system utilities, file operations, and useful API integrations — all from your terminal.

## Installation

```bash
git clone https://github.com/deepakpathik/sesd_workshop2.git
cd sesd_workshop2
npm install
```

### Link globally (optional)

```bash
npm run build
npm link
```

Now you can run `devtool` from anywhere.

## Usage

```bash
# Development mode
npx ts-node src/index.ts <command>

# After build + link
devtool <command>
```

## Available Commands

| Command | Usage | Description |
|---------|-------|-------------|
| `greet` | `devtool greet <name>` | Greet a user with a personalized welcome message |
| `info` | `devtool info` | Show Node.js version, platform, and architecture |
| `time` | `devtool time` | Display the current system date and time |
| `randomnum` | `devtool randomnum` | Generate a random number between 1 and 100 |
| `fileinfo` | `devtool fileinfo <filename>` | Show file size, last modified time, and extension |
| `wordcount` | `devtool wordcount <filename>` | Count total words in a text file |
| `github` | `devtool github <username>` | Fetch a GitHub user profile with repo and follower stats |
| `weather` | `devtool weather <city>` | Get current temperature, humidity, and conditions |
| `quote` | `devtool quote` | Display a random inspirational quote |
| `joke` | `devtool joke` | Tell a random joke with setup and punchline |

## Examples

```bash
devtool greet Deepak
# 👋 Hello Deepak, welcome to DevTool CLI

devtool github torvalds
# 🐙 GitHub Profile
#   Username     torvalds
#   Repos        11
#   Followers    288567
#   Profile      https://github.com/torvalds

devtool weather London
# 🌤  Weather in London
#   Temp       10.3°C
#   Humidity   83%
#   Condition  Clear sky
#   Wind       13.3 km/h

devtool fileinfo package.json
# 📄 File Information
#   File       package.json
#   Size       0.82 KB
#   Modified   3/4/2026, 10:52:40 PM
#   Extension  .json

devtool joke
# 😂 Random Joke
#   What do you call a dad that has fallen through the ice?
#   A Popsicle.
```

## APIs Used

| API | Endpoint | Purpose |
|-----|----------|---------|
| GitHub | `https://api.github.com/users/{username}` | Fetch user profiles |
| Open-Meteo | `https://api.open-meteo.com/v1/forecast` | Weather data (no API key required) |
| DummyJSON | `https://dummyjson.com/quotes/random` | Random quotes |
| Official Joke API | `https://official-joke-api.appspot.com/random_joke` | Random jokes |

## Project Structure

```
sesd_workshop2/
├── src/
│   ├── commands/
│   │   ├── greet.ts
│   │   ├── time.ts
│   │   ├── randomnum.ts
│   │   ├── fileinfo.ts
│   │   ├── wordcount.ts
│   │   ├── github.ts
│   │   ├── weather.ts
│   │   ├── quote.ts
│   │   └── joke.ts
│   ├── services/
│   │   ├── GithubService.ts
│   │   ├── WeatherService.ts
│   │   ├── QuoteService.ts
│   │   └── JokeService.ts
│   ├── utils/
│   │   ├── fileUtils.ts
│   │   └── validator.ts
│   └── index.ts
├── package.json
├── tsconfig.json
└── .gitignore
```

## Tech Stack

- **Runtime** — Node.js
- **Language** — TypeScript
- **CLI Framework** — Commander.js
- **HTTP Client** — Axios
- **Styling** — Chalk

## Scripts

```bash
npm run dev      # Run with ts-node
npm run build    # Compile TypeScript to dist/
npm start        # Run compiled output
```

## License

ISC
