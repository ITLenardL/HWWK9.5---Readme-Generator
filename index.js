const inquirer = require("inquirer");
const fs = require('fs');
const template = require('./template');

const askQuestions = () => {
  return inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the project title?"
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
        message: "Provide the project licence or your badge link"
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
    const answers = await askQuestions()
    console.log(answers)
    const generateMd = template(answers);
    // const queryUrl = `https://api.github.com/users/${data.username}`;
    // then.get(queryUrl).then(function(githubData) {
    //   const githubInfo = {
    //     githubImage: githubData.data.avatar_url,
    //     email: githubData.data.email,
    //     profile: githubData.data.html_url,
    //     name: githubData.data.name
    //   }});
      
      fs.writeFile("README.md", generateMd, function(err) {
        if (err) 
        console.log(err);
        else
        console.log("created readme successfully");
      });
}


init();
