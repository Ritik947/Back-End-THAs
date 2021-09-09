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
    'This is a utility for performing operations related to file system asynchronously. Run asyncrud --help to learn more.'
  );
  process.exit();
} else if (args.length > 1) {
  console.log(
    chalk.red('Too many arguments. Run asyncrud --help to learn more.')
  );
  process.exit();
} else {
  switch (args[0]) {
    case '--help':
      let help = `    
    Usage:
        asyncrud [command]

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
        fs.writeFile(str[0], str.slice(1).join(' '), (err) => {
          if (err) throw err;
          console.log('Saved!');
        });
        readline.close();
      });
      break;
    case '--file-append':
      readline.question(chalk.blue(`Enter [filename] [data]:\n`), (str) => {
        str = str.split(' ');
        fs.appendFile(str[0], str.slice(1).join(' '), (err) => {
          if (err) throw err;
          console.log('Appended!');
        });
        readline.close();
      });
      break;
    case '--file-read':
      readline.question(chalk.blue(`Enter [filename]:\n`), (str) => {
        fs.readFile(str, 'utf-8', (err, data) => {
          if (err) throw err;
          console.log(data);
        });
        readline.close();
      });
      break;
    case '--file-delete':
      readline.question(chalk.blue(`Enter [filename]:\n`), (str) => {
        fs.unlink(str, (err) => {
          if (err) throw err;
          console.log('File deleted!');
        });
        readline.close();
      });
      break;
    case '--file-rename':
      readline.question(
        chalk.blue(`Enter [old-filename] [new-filename]:\n`),
        (str) => {
          str = str.split(' ');
          fs.rename(str[0], str.slice(1).join(' '), (err) => {
            if (err) throw err;
            console.log('File renamed!');
          });
          readline.close();
        }
      );
      break;
    case '--folder-create':
      readline.question(chalk.blue(`Enter [folder-name]:\n`), (str) => {
        fs.mkdir(str, (err) => {
          if (err) throw err;
          console.log('Folder created!');
        });
        readline.close();
      });
      break;
    case '--folder-delete':
      readline.question(chalk.blue(`Enter [folder-name]:\n`), (str) => {
        fs.rmdir(str, (err) => {
          if (err) throw err;
          console.log('Folder deleted!');
        });
        readline.close();
      });
      break;
    case '--folder-rename':
      readline.question(
        chalk.blue(`Enter [old-folder-name] [new-folder-name]:\n`),
        (str) => {
          str = str.split(' ');
          fs.rename(str[0], str.slice(1).join(' '), (err) => {
            if (err) throw err;
            console.log('Folder renamed!');
          });
          readline.close();
        }
      );
      break;
    default:
      console.log(
        chalk.red('Invalid command. Run asyncrud --help to learn more.')
      );
      process.exit();
  }
}
