const Employee = require('./employee');

class Intern extends Employee{
    //builds manager object
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