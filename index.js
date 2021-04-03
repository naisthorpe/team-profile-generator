// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Manager questions
const managerQs = [
    { 
        type: "input",
        message: "What is the team manager's name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is the team manager's id?",
        name: "id",
    },
    {
        type: "input",
        message: "What is the team manager's email?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the team manager's office number?",
        name: "officeNumber",
    }  
];

// Engineer questions
const engineerQs = [
    { 
        type: "input",
        message: "What is the engineer's name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is the engineer's id?",
        name: "id",
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "github",
    }
];

// Intern questions
const internQs = [
    { 
        type: "input",
        message: "What is the intern's name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is the intern's id?",
        name: "id",
    },
    {
        type: "input",
        message: "What is the intern's email?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the intern's school?",
        name: "school",
    }
];

const moreQs = [
    {
        type: "list",
        message: "Which type of team member would you like to add? (Use arrow keys)",
        name: "add",
        choices: [
            "Engineer",
            "Intern",
            "I don't want to add anymore team members"
        ]
    }
];

inquirer
    .prompt(managerQs)
    .then( (response) => {
        console.log(response.name);
    });