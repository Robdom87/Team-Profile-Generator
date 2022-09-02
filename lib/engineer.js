const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(val) {
        if (typeof val.github !== "string" || !val.github.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        }
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