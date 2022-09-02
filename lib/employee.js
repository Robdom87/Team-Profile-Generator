class Employee {
    constructor(val) {
        if (typeof val.name !== "string" || !val.name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
          } 
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