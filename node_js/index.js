// import chalk from "chalk"

// console.log(chalk.blue('Hello, world!'));
// console.log(chalk.red.bold('This is an error message.'));
// console.log(chalk.green.underline('This is a success message.'));

import fs from "fs";
import { Command } from "commander"

const program = new Command();

program
  .name("File Counter")
  .description("CLI to do file based counting(words, lines, sentences)")
  .version("1.0.0");

program
  .command("count_words")
  .description("Count the number of words in the file.")
  .argument("<file>", "name of file to count from")
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
  .command("count_lines")
  .description("Count the number of lines in the file.")
  .argument("<file>", "name of file to count from")
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
  .command("count_sentences")
  .description("Count the number of sentences in the file.")
  .argument("<file>", "name of file to count from")
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
