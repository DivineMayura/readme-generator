// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");


var choices = ["Apache 2.0",
"BSD 3-Clause License",
"Attribution CC BY",
"Attribution-ShareAlike CC BY-SA",
"Attribution-NoDerivs CC BY-ND",
"Attribution-NonCommercial CC BY-NC",
"Attribution-NonCommercial-ShareAlike CC BY-NC-SA",
"The MIT License",
"No License"];

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is your GitHub username? (Case Sensitive.)",
        name: "gitHubUserName"
    },
    {
        message: "What is your real name? (Case Sensitive.)",
        name: "ownerName"
    },
    {
        message: "What is the title of the project?",
        name: "title"
    },
    {
        message: "What year are you publishing this work? (Whatever year you want to appear on licenses.)",
        name: "year"
    },
    {
        message: "What is the description of this project? (Explain what your application does, justify technologies used, maybe talk about some challenged faced and features you hope to implement in the future",
        name: "description"
    },
    {
        message: "Would you like to include installation instructions? \n If, so: Type them in. \n Otherwise, keep it empty.",
        name: "description"        
    },
    {
        message: "Would you like to include your portfolio? (So people can find you easier.) \n If, so: What is the link to your portoflio? \n Otherwise, keep it empty.",
        name: "portfolio"
    },
    {
        message: "Would You like to include your LinkedIn? \n If, so: What is the link to your LinkedIn? \n Otherwise, keep it empty.",
        name: "linkedIn"
    },
    {
        type: "list",
        message: "What License would you like to use for this?",
        choices: choices, 
        name: "license"
    }
];




function init() {
    
    inquirer
        .prompt(questions)
        .then(data => {
            console.log(data)
            fs.writeFile(`${data.title}.md`, generateMarkdown(data), (err) => err ? console.error(err, "If this message is being played, it errored.") : console.log("Yoooo lets gooooo"))
        })
        .catch(err => console.log(err))
}










// Function call to initialize app
init();
