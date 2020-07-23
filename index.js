// module variables
const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util")

const writeFileAsync = util.promisify(fs.writeFile)

// calls prompts to fill out README.md
function userPrompt() {
    return inquirer.prompt([
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
        // Instructions on intalling files
        {
            type: "input",
            name: "installation",
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
            choices: ["None", "GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"]
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
        // Any github username and email
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub username",
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email",
        },
    ])
}

// Generates users README.md file
function generateREADME(answers) {
    return `
![GitHub license](https://img.shields.io/badge/license-${answers.license}-bluehttps://img.shields.io/badge/license-${answers.license}-bluehttps://img.shields.io/badge/license-${answers.license}-blue.)
# ${answers.title}
    
## DESCRIPTION:
${answers.description}

## TABLE OF CONTENTS: 
### 1. [Installation](#Installation)
### 2. [Usage](#Usage) 
### 3. [License](#License) 
### 4. [Contributing](#Contributing) 
### 5. [Tests](#Tests)
### 6. [Questions](#Questions) 

## INSTALLATION:
${answers.installation}

## USAGE:
${answers.usage}

## LICENSE:
${answers.license}

## CONTRIBUTION:
${answers.contribution}

## TEST:
${answers.tests}

## QUESTIONS:
For any questions about the application refer to my Github: [${answers.github}](https://github.com/${answers.github})
Or contact me by email: ${answers.email}
    `
}

// Calls user input and pushes them to README.md
userPrompt()
    .then(function (answers) {
        const README = generateREADME(answers)

        return writeFileAsync("README.md", README)
    })
    .then(function () {
        console.log("Successfully wrote to README.md")
    })
    .catch(function (err) {
        console.log(err)
    });