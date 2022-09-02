//packages needed for this application
const Employee = require('./employee');


class Engineer extends Employee {
    constructor(val) {
        super(new Employee(val));
        this.github = val.github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;