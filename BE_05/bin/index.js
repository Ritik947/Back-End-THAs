#! /usr/bin/env node
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const chalk = require('chalk');
const fs = require('fs');
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log(
    'This is a utility for performing operations related to file system. Run crud --help to learn more.'
  );
  process.exit();
} else if (args.length > 1) {
  console.log(chalk.red('Too many arguments. Run crud --help to learn more.'));
  process.exit();
} else {
  switch (args[0]) {
    case '--help':
      let help = `    
    Usage:
        crud [command]

    Commands:
        The following options prompt the user to enter required input:
        --file-write - to write into a file(creates a new file if file does not exist)
        --file-append - to add new data in an existing file
        --file-read - to read an existing file
        --file-delete - to delete an existing file
        --file-rename - to rename an existing file
        --folder-create - to create a new folder
        --folder-delete - to delete an existing folder
        --folder-rename - to rename an existing folder
        `;
      console.log(help);
      process.exit();
    case '--file-write':
      readline.question(chalk.blue(`Enter [filename] [data]:\n`), (str) => {
        str = str.split(' ');
        fs.writeFileSync(str[0], str.slice(1).join(' '));
        readline.close();
      });
      break;
    case '--file-append':
      readline.question(chalk.blue(`Enter [filename] [data]:\n`), (str) => {
        str = str.split(' ');
        fs.appendFileSync(str[0], str.slice(1).join(' '));
        readline.close();
      });
      break;
    case '--file-read':
      readline.question(chalk.blue(`Enter [filename]:\n`), (str) => {
        let data = fs.readFileSync(str, 'utf-8');
        console.log(data);
        readline.close();
      });
      break;
    case '--file-delete':
      readline.question(chalk.blue(`Enter [filename]:\n`), (str) => {
        fs.unlinkSync(str);
        readline.close();
      });
      break;
    case '--file-rename':
      readline.question(
        chalk.blue(`Enter [old-filename] [new-filename]:\n`),
        (str) => {
          str = str.split(' ');
          fs.renameSync(str[0], str.slice(1).join(' '));
          readline.close();
        }
      );
      break;
    case '--folder-create':
      readline.question(chalk.blue(`Enter [folder-name]:\n`), (str) => {
        fs.mkdirSync(str);
        readline.close();
      });
      break;
    case '--folder-delete':
      readline.question(chalk.blue(`Enter [folder-name]:\n`), (str) => {
        fs.rmdirSync(str);
        readline.close();
      });
      break;
    case '--folder-rename':
      readline.question(
        chalk.blue(`Enter [old-folder-name] [new-folder-name]:\n`),
        (str) => {
          str = str.split(' ');
          fs.renameSync(str[0], str.slice(1).join(' '));
          readline.close();
        }
      );
      break;
    default:
      console.log(chalk.red('Invalid command. Run crud --help to learn more.'));
      process.exit();
  }
}
