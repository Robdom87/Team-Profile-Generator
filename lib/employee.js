//packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');

class Employee {
    constructor() {
        this.name;
        this.id;
        this.email;
        this.add;
    }
    getName() {
        return inquirer
            //ask the user the intial questions
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is their name?",
                }
            ])
    }
    getID() {
        return inquirer
            //ask the user the intial questions
            .prompt([
                {
                    type: 'input',
                    name: 'employeeID',
                    message: "What is their employeeID?",
                }
            ])
    }
    getEmail() {
        return inquirer
            //ask the user the intial questions
            .prompt([
                {
                    type: 'input',
                    name: 'email',
                    message: "What is their email?",
                }
            ])
                }
    getRole() {
        return 'Employee';
    }
    end(){
        fs.appendFile('./dist/index.html', `</section></body></html>`, (err) =>
        err ? console.log(err) : console.log('Html Completed!'));
    }
}

module.exports = Employee;