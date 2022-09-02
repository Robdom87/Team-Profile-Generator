const Employee = require('./employee');

//manager class
class Manager extends Employee{
    //builds manager object
    constructor(val) {
        super(new Employee(val));
        this.officeNumber = val.officeNumber;
    }
    getRole(){
        return 'Manager';
    }
};

module.exports = Manager;