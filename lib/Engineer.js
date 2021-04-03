const Employee = require("./Employee");

class Engineer extends Employee {
    // engineer has name, email, id, github username parameters
    constructor (name, email, id, github) {
        // name, email, and id are from Employee class
        super(name, email, id);
        // github is unique to engineer
        this.github = github;
    }
    
    // getRole similar to Employee class getRole function
    getRole() {
        return this.constructor.name;
    }
    
    // function to return github username
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;
