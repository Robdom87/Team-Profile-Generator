const Employee = require('./Employee');

class Intern extends Employee {
    constructor(val) {
        if (typeof val.school !== "string" || !val.school.trim().length) {
            throw new Error("Expected parameter 'school' to be a non-empty string");
        }
        super(new Employee(val));
        this.school = val.school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
};

module.exports = Intern;