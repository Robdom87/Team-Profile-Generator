class Employee {
    constructor(val) {
        this.name = val.name;
        this.id = val.id;
        this.email = val.email;
    }
    getName(){
        return this.name;
    }
    getID(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;