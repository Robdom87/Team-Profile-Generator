const Employee = require('./Employee');

class Intern extends Employee{
    constructor(val) {
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