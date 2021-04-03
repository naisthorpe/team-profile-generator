const Employee = require("./Employee");

class Intern extends Employee {
    // engineer has name, email, id, school parameters
    constructor (name, id, email, school) {
        // name, email, and id are from Employee class
        super(name, id, email);
        // school is unique to engineer
        this.school = school;
    }
    
    // getRole similar to Employee class getRole function
    getRole() {
        return this.constructor.name;
    }
    
    // function to return school name
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;
