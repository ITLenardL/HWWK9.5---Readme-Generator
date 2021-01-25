const inquirer = require('inquirer');
const fs = require('fs');
const template = require("./template")

const askQuestions = () => {
    return inquirer.prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'where are you located?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'what is your age?',
      name: 'age',
    },
    {
        type: 'input',
        message: 'what is your linkedin url?',
        name: 'linkedin',
      },
      {
        type: 'input',
        message: 'what is your github url?',
        name: 'github',
      },
])}
const init = async() => {
    const answers = await askQuestions()
    console.log(answers)
    const generatedHtml = template(answers);
    fs.writeFile("index.html", generatedHtml, (answers) => {} )

}


init();
