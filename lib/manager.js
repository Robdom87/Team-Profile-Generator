const Employee = require('./Employee');

class Manager extends Employee {
    constructor(val) {
        if (typeof val.officeNumber !== "string" || !val.officeNumber.trim().length) {
            throw new Error("Expected parameter 'officeNumber' to be a non-empty string");
        }
        super(new Employee(val));
        this.officeNumber = val.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;