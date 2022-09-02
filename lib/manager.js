const Employee = require('./Employee');

class Manager extends Employee{
    constructor(val) {
        super(new Employee(val));
        this.officeNumber = val.officeNumber;
    }
    getRole(){
        return 'Manager';
    }
};

module.exports = Manager;