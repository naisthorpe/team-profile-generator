// Inquirer package for terminal questions
const inquirer = require("inquirer");
// fs package for writing file
const fs = require("fs");
// Include the classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// Require generateTeam function from page-template.js in order to call it here
const generateTeam = require("./src/page-template");
// Empty list to push team members to - this will be passed into generateTeam when writing the file
const team = [];

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

// Questions for adding more members or ending 
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

function manager() {
    inquirer
        // ask manager questions
        .prompt(managerQs)
        // take the response and create a new manager
        .then( (response) => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
            // Add manager object to team list
            team.push(manager);
            // Run moreQs function to ask if more members should be added
            addMore();
        });
}

function engineer() {
    inquirer
        .prompt(engineerQs)
        .then( (response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            // Add engineer object to team list
            team.push(engineer);
            // Run moreQs function to ask if more members should be added
            addMore();
        });
}

function intern() {
    inquirer
        .prompt(internQs)
        .then( (response) => {
            const intern = new Intern(response.name, response.id, response.email, response.school);
            // Add intern object to team list
            team.push(intern);
            // Run moreQs function to ask if more members should be added
            addMore();
        });
}

function addMore() {
    inquirer
        .prompt(moreQs)
        .then( (response) => {
            console.log(response);
            switch (response.add) {
                case "Engineer":
                    engineer();
                    break;
                case "Intern":
                    intern();
                    break;
                default:
                    console.log("Thank you, your team HTML file has been generated.");
                    // if done, write to file with info provided
                    // call the generateTeam function to create the HTML
                    // https://stackoverflow.com/questions/2496710/writing-files-in-node-js
                    fs.writeFileSync("./output/index.html", generateTeam(team));
            }
        });
}

function init() {
    // Welcome message
    console.log("Please add your team members:");
    // Start with manager function
    manager();
}

// This function start the file
init(); 