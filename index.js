// module variables
const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util")

const writeFileAsync = util.promisify(fs.writeFile)

// calls prompts to fill out README.md
function userPrompt() {
    return inquirer.prompt ([
    // Title of README
    {
        type: "input",
        name: "title",
        message: "Enter the title of your project"
    },
    // Description for README
    {
        type: "input",
        name: "description",
        message: "Enter a description"
    },
    // Table of Contents for README
    {
        type: "input",
        name: "table of contents",
        message: "Enter table of contents for README"
    },
    // Instructions on intalling files
    {
        type: "input",
        name: "intallation instructions",
        message: "Enter downloading intallation instructions"
    },
    // Applicaiton usage
    {
        type: "input",
        name: "usage",
        message: "Enter usage information"
    },
    // License agreements
    {
        type: "list",
        name: "license",
        message: "Choose License(s) for application",
        choices: []
    },
    // Contribution
    {
        type: "input",
        name: "contribution",
        message: "Enter contribution guidelines"
    },
    // Test instructions
    {
        type: "input",
        name: "tests",
        message: "Enter test instructions"
    },
    // Any FAQ's
    {
        type: "input",
        name: "questions",
        message: "Enter any frequently asked questions"
    },   
    ])
}

// Generates users README.md file
// function generateREADME(answers) {
//     return `

//     `
// }

// Calls user input and pushes them to README.md
userPrompt()
  .then(function(answers) {
    const README = generateREADME(answers);

    return writeFileAsync("README.md", README);
  })
  .then(function() {
    console.log("Successfully wrote to README.md");
  })
  .catch(function(err) {
    console.log(err);
  });