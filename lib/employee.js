//packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

class Employee {
    constructor() {
        this.name;
        this.id;
        this.email;
    }
    employeeQuestions() {
        this.getName();
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
            .then(val => {
                this.name = val.name;
                this.getID();
            })
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
            .then(val => {
                this.id = val.employeeID;
                this.getEmail();
            })
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
            .then(val => {
                this.email = val.email;
                
            })
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;