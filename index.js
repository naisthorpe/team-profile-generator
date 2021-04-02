// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Create an array of questions for user input
const questions = [
    { 
        type: "input",
        message: "What is the team manager's name?",
        name: "manager-name",
    },
    {
        type: "input",
        message: "What is the team manager's id?",
        name: "manager-id",
    },
    {
        type: "input",
        message: "What is the team manager's email?",
        name: "manager-email",
    },
    {
        type: "input",
        message: "What is the team manager's office number?",
        name: "manager-office",
    },
    {
        type: "list",
        message: "Which type of team member would you like to add? (Use arrow keys)",
        name: "member-add",
        choices: [
            "Engineer",
            "Intern",
            "I don't want to add anymore team members"
        ],
    },
    
];