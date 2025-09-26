import chalk from "chalk"

// console.log(chalk.blue('Hello, world!'));
// console.log(chalk.red.bold('This is an error message.'));
// console.log(chalk.green.underline('This is a success message.'));

import fs from "fs";
import { Command } from "commander"

const program = new Command();

program
  .name(chalk.blue("File Counter"))
  .description(chalk.green("CLI to do file based counting(words, lines, sentences)"))
  .version(chalk.yellowBright("1.0.0"))

program
  .command(chalk.green("count_words"))
  .description(chalk.red("Count the number of words in the file."))
  .argument(chalk.blue("file"), chalk.green("name of file to count from"))
  .action((file) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.log(err.message);
      } else {
        const line = data.split("\n")
        let words = 0
        for(let i = 0; i < line.length; i++){
            words = words + line[i].split(" ").length ;
        }
        console.log(`There are ${words} words in ${file}`);
      }
    });
  });

program
  .command(chalk.green("count_lines"))
  .description(chalk.red("Count the number of lines in the file."))
  .argument(chalk.blue("file"), chalk.green("name of file to count from"))
  .action((file) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.log(err.message);
      } else {
        const lines = data.split("\n").length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });

program
  .command(chalk.green("count_sentences"))
  .description(chalk.red("Count the number of sentences in the file."))
  .argument(chalk.blue("file"), chalk.green("name of file to count from"))
  .action((file) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.log(err.message);
      } else {
        const sentences = data.split(".").length;
        console.log(`There are ${sentences - 1} sentences in ${file}`);
      }
    });
  });

program.parse();
