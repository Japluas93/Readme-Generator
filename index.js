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
    type: "checkbox",
    message:
      "Please select which type of license you used for this application.",
    choices: ["MIT", "ISC", "Apache License 2.0", "GNU GPLv3"],
    name: "license",
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
    message: "Please enter your Github Username.",
    name: "githubUsername",
  },
  {
    type: "input",
    message: "Please enter your e-mail address.",
    name: "eMail",
  },
  {
    type: "input",
    message: "Please enter instructions on how you might be contacted.",
    name: "contactInstructions",
  },
];
// Launching the prompt interface (using inquirer.prompt) with our questions array that will wait for the user's input
// User input values are called back (with the .then method) and applied to the response argument
inquirer.prompt(questions).then((response) => {
  const result = `
# ${response.appName}
${response.appDescription}
${response.appInstall}
${response.appUsage}
${response.license}
${response.appContributions}
${response.Tests}
${response.githubUsername}
${response.eMail}
${response.contactInstructions}`;
  console.log(result);
  console.log(response);
});
// Take users responses and log them (using fs.writeFile) to their generated Read Me file"
fs.writeFile("README.md", result, function (err) {
  if (err) return console.log(err);
  console.log("This is your Read Me");
});
