#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import clear from "clear";
import open from "open";

// clear the terminal before showing the npx card
clear()

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What do you want to do?",
    choices: [
      {
        // Use chalk to style headers
        name: `Toss an ${chalk.bold("email")}?`,
        value: () => {
          open("mailto:tjrdud6412@naver.com");
          console.log("\nLooking forward to hearing your message and replying to you!\n");
        }
      },
      {
        name: "Exit",
        value: () => {
          console.log("Good bye, have a nice day!\n");
        }
      }
    ]
  }
];

const data = {
  name: chalk.bold.white("                     c9u11"),
  // handle: chalk.white("@harshhhdev"),
  // fact: chalk.hex('#B10000')('I love Open-Source!'),
  email: chalk.hex('#00A1D9')("tjrdud6412@naver.com"),
  github: chalk.hex('#787878')("https://github.com/c9u11"),
  // dev: chalk.hex('#330093')("https://dev.to/harshhhdev"),
  instagram: chalk.hex('#AB009C')("https://www.instagram.com/c_9u11"),
  website: chalk.hex('#00AB9E')("https://c9u11.github.io/portfolio"),
  npx: chalk.hex('#A1AB00')("npx c9u11"),

  // labelFact: chalk.hex('#FF6262').bold("          Fun Fact:"),
  labelEmail: chalk.hex('#629DFF').bold("     Email:"),
  labelGitHub: chalk.hex('#9E9E9E').bold("    GitHub:"),
  // labelDev: chalk.hex('#A959FF').bold("           Dev:"),
  labelInstagram: chalk.hex('#F259FF').bold(" Instagram:"),
  labelWebsite: chalk.hex('#59FFC8').bold("   Website:"),
  labelCard: chalk.hex('#FFF976').bold("               Card:")
};

const me = boxen(
  [
    `${data.name}`,
    // ``,
    // `${data.labelFact}  ${data.fact}`,
    ``,
    `${data.labelEmail}  ${data.email}`,
    `${data.labelGitHub}  ${data.github}`,
    // `${data.labelDev}  ${data.dev}`,
    `${data.labelInstagram}  ${data.instagram}`,
    `${data.labelWebsite}  ${data.website}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    // ``,
    // `${chalk.bold(
    //   "Hi there! I'm Harsh, I'm a passionate MERN stack "
    // )}`,
    // `${chalk.bold("developer and web designer from India, and have a ")}`,
    // `${chalk.bold(
    //   "hobby for creating beautiful, cool, and responsive "
    // )}`,
    // `${chalk.bold(
    //   "web apps. Toss me an email if you want to collab!"
    // )}`
  ].join("\n"),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: "single",
    borderColor: "blue"
  }
);

// Show the boxen
console.log(me);

prompt(questions).then(answer => answer.action());