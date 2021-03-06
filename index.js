// fs is a Node standard library package for reading and writing files
const fs = require("fs");

// express is a Node standard library package for asking questions, parsing input, and validating answers
const inquirer = require("inquirer");

// array of questions that will be prompted for user
const questions = [
  {
    type: "input",
    message: "What is the name of your application?",
    name: "appName",
  },
  {
    type: "input",
    message: "Please describe your application",
    name: "appDescription",
  },
  {
    type: "input",
    message: "Please explain how to install your application.",
    name: "appInstall",
  },
  {
    type: "input",
    message: "Please explain how to use your application.",
    name: "appUsage",
  },
  {
    type: "list",
    message:
      "Please select which type of license you used for this application.",
    choices: ["MIT", "ISC", "Apache License 2.0", "GNU GPLv3"],
    name: "appLicense",
  },
  {
    type: "input",
    message:
      "Please explain your contribution guidelines for this application.",
    name: "appContributions",
  },
  {
    type: "input",
    message: "Please explain how to run tests for your application.",
    name: "appTests",
  },
  {
    type: "input",
    message: "Please enter instructions on how you might be contacted.",
    name: "contactInstructions",
  },
  {
    type: "input",
    message: "Please enter your e-mail address.",
    name: "eMail",
  },
  {
    type: "input",
    message: "Please enter your Github Username.",
    name: "githubUsername",
  },
];
// Launching the prompt interface (using inquirer.prompt) with our questions array that will wait for the user's input
// User input values are called back (with the .then method) and applied to the response argument
inquirer.prompt(questions).then((response) => {
  const result = `
  # Table of Contents
1. [Name](#Name)
2. [Description](#Description)
3. [Installation Instructions](#Installation-Instructions)
4. [Usage](#Usage)
5. [License](#License)
6. [Contributions](#Contributions)
7. [Tests](#Tests)
8. [Questions](#Questions)  

# Name
# ${response.appName}
# Description
${response.appDescription}
# Installation Instructions
${response.appInstall}
# Usage
${response.appUsage}
# License
${response.appLicense}
# Contributions
${response.appContributions}
# Tests
${response.appTests}
# Questions
${response.contactInstructions}  
${response.eMail}  
[Github Profile](https://github.com/${response.githubUsername})
`;
  console.log(result);
  console.log(response);
  // Take users responses and log them (using fs.writeFile) to their Generated Read Me file"
  fs.writeFile("GENERATEDREADME.md", result, function (err) {
    if (err) return console.log(err);
    console.log("This is your Read Me");
  });
});

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
