#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";

const program = new Command();

program
    .name("devtool")
    .version("1.0.0")
    .description("A developer productivity CLI tool")
    .action(() => {
        console.log(chalk.green.bold("DevTool CLI initialized"));
    });

program.parse(process.argv);
