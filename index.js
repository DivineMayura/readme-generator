// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// license choices.
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
        message: "What is your GitHub username?\n     ",
        name: "gitHubUserName"
    },
    {
        message: "What is your real name? (Case Sensitive.)\n     ",
        name: "ownerName"
    },
    {
        message: "What is the title of the project?\n     ",
        name: "title"
    },
    {
        message: "What year are you publishing this work? (Whatever year you want to appear on licenses.)\n     ",
        name: "year"
    },
    {
        message: "What is the description of this project? \n \n (Explain what your application does, justify technologies used, maybe talk about some challenged faced and features you hope to implement in the future.)\n     ",
        name: "description"
    },
    {
        message: "Would you like to include installation instructions? \n \n If so: Type them in. \n Otherwise, keep it empty.\n     ",
        name: "install"
    },
    {
        message: "Would you like to include usage instructions? \n \n If so: Type them in. \n Otherwise, keep it empty.\n     ",
        name: "usage"
    },
    {
        message: "Would you like to include your portfolio? (So people can find you easier.) \n \n If so: What is the link to your portoflio? \n Otherwise, keep it empty.\n     ",
        name: "portfolio"
    },
    {
        message: "Would You like to include your LinkedIn? \n \n If so: What is the link to your LinkedIn? \n Otherwise, keep it empty.\n     ",
        name: "linkedIn"
    },
    {
        message: "Would You like to include your GitHub? \n \n If so: What is the link to your GitHub? \n Otherwise, keep it empty.\n     ",
        name: "gitlink"
    },
    {
        message: "Who contributed? \n \n If nobody contributed keep it empty.\n     ",
        name: "contributing"
    },
    {
        message: "Would You like to include tests? \n \n If not: keep it empty.\n     ",
        name: "tests"
    },
    {
        type: "list",
        message: "What License would you like to use for this?\n",
        choices: choices,
        name: "license"
    }
];



// 
function init() {

    inquirer
        .prompt(questions)
        .then(data => {
            console.log(data)
            fs.writeFile(`${data.title}.md`, generateMarkdown(data), (err) => err ? console.error(err, "If this message is being played, it errored.") : console.log("Cool, it worked!"))
        }) //this is kind of hellish, to be honest
        .catch(err => console.log(err))
}


// Function call to initialize app
init();
