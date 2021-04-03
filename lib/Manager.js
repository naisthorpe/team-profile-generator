const Employee = require("./Employee");

class Manager extends Employee {
    // Manager has the following parameters
    constructor(name, id, email, officeNumber) {
        // name, id, and email come from Employee class
        super(name, id, email);
        // officeNumber is unique to Manager
        this.officeNumber = officeNumber;
    }

    // Function to return office number
    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager;
