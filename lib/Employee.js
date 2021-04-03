class Employee {
    // Constructor with three parameters
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // getName function
    getName() {
        return this.name;
    }

    // getId function
    getId() {
        return this.id;
    }

    // getEmail function
    getEmail() {
        return this.email;
    }

    // getRole function
    // https://stackoverflow.com/questions/29310530/get-the-class-name-of-es6-class-instance
    getRole() {
        return this.constructor.name;
    }
}

module.exports = Employee;
