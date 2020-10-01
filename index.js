// import inquirer
var inquirer = require("inquirer");
var fs = require("fs");
var gM = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a short description of your project:",
        name: "description"
    },
    {
        type: "list",
        message: "What license would you like your project to have?",
        name: "license",
        choices: ["MIT", "GPLv3", "Apache"]
    },
    {
        type: "input",
        message: "What command is used to install dependencies?",
        name: "install"
    },
    {
        type: "input",
        message: "What command is used to run tests?",
        name: "test"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    var fileContents = gM.generateMarkdown(data);
    fs.writeFile(fileName, fileContents, function(err){
        if(err){
            throw err;
        }
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(response){
        writeToFile("README.md", response)
    })
}

// function call to initialize program
init();
