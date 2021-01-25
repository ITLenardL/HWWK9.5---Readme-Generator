//Declare globally required packages and file functions
const inquirer = require("inquirer");
const fs = require('fs');
const template = require('./template');

//Prompt questions and store answers as an array
const askQuestions = () => {
    return inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the project title?"
    },
    {
    type: "input",
    name: "badge",
    message: "Provide the badges links"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of the project"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "How should this project be used?"
    },
    {
        type: "input",
        name: "licence",
        message: "Provide the project licence"
    },
    {
        type: "input",
        name: "contributing",
        message: "List the contributing parties"
    },
    {
        type: "input",
        name: "test",
        message: "Provide the project tests"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?"
    },
])};

const init = async() => {
    //declare answers as the object name for arrayed answers
    const answers = await askQuestions()
    // console.log(answers)

    //generatemd as the template filled with answers from array
    const generateMd = template(answers);

    //write to file into the folder generatedreadme, filename README.md, if error display error message, if successful display success message
    fs.writeFile("generatedreadme/README.md", generateMd, function(err) {
    if (err) 
    console.log(err);
    else
    console.log("created readme successfully");
    });
}

init();
