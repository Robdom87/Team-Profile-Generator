//packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');


class Employees {
    start() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is your name?",
                },
                {
                    type: 'input',
                    name: 'employeeID',
                    message: 'What is your employee ID?',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your email?',
                },
            ])
    }

}

const questions = {
    //manager only
    'officeNumber': 'What is your office number?',
    //engineer only
    'username': 'What is your Github username?',
    //intern only
    'university': 'What school are you attending?'   
}

module.exports =  Employees;