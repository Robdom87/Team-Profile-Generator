//packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

//calling in manager.js
const manager = require('./manager');
const engineer = require('./engineer');
const intern = require('./intern');

//inital section of html
let htmlBeg =
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <title>Team-Profiles</title>
</head>

<body>
    <header class="hero is-info has-text-centered ">
        <div class="hero-body">
            <p class="title">
                My Team
            </p>
        </div>
    </header>

    <section class="columns is-justify-content-center is-flex-wrap-wrap">`;

let htmlEnd = `</section></body></html>`;

class Employees {
    constructor() {
        this.employeeType = 'manager';
        this.allEmployees = ['manager'];
    }
    start() {
        //create the index.html and write the intial portion to it
        fs.writeFile('./dist/index.html', htmlBeg, (err) =>
            err ? console.log(err) : console.log(''));
        this.newEmployee();
    }
    newEmployee() {
        switch (this.employeeType) {
            case 'manager':
                this.createManager();
                break;
            case 'engineer':
                this.createEngineer();
                break;
            case 'intern':
                this.createIntern();
                break;
            case 'done':
                this.end();
                break;
        }
    }
    createManager() {
        return inquirer
            //ask the user the intial questions
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
                {
                    type: 'input',
                    name: 'officeID',
                    message: 'What is your office ID?',
                },
                {
                    type: 'list',
                    name: 'menu',
                    message: 'Are you satisfied with your team?',
                    choices: ['Add Engineer', 'Add Intern', 'Done.'],
                },
            ])
            .then(val => {
                //once the responses are received create a new object for this manager
                const newManager = new manager(val);
                this.renameResponses(val.menu);
                //call managerQuestion from manager object
                newManager.managerSectionWrite();
                this.newEmployee();
            })
    }
    createEngineer() {
        return inquirer
            //ask the user the intial questions
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
                {
                    type: 'input',
                    name: 'username',
                    message: 'What is your Github username?',
                },
                {
                    type: 'list',
                    name: 'menu',
                    message: 'Are you satisfied with your team?',
                    choices: ['Add Engineer', 'Add Intern', 'Done.'],
                },
            ])
            .then(val => {
                //once the responses are received create a new object for this manager
                const newEngineer = new engineer(val);
                this.renameResponses(val.menu);
                //call managerQuestion from manager object
                newEngineer.engineerSectionWrite();
                this.newEmployee();
            })
    }
    createIntern() {
        return inquirer
            //ask the user the intial questions
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
                {
                    type: 'input',
                    name: 'university',
                    message: 'What school are you attending?',
                },
                {
                    type: 'list',
                    name: 'menu',
                    message: 'Are you satisfied with your team?',
                    choices: ['Add Engineer', 'Add Intern', 'Done.'],
                },
            ])
            .then(val => {
                //once the responses are received create a new object for this manager
                const newIntern = new intern(val);
                this.renameResponses(val.menu);
                //call managerQuestion from manager object
                newIntern.internSectionWrite();
                this.newEmployee();
            })
    }
    end() {
        fs.appendFile('./dist/index.html', htmlEnd, (err) =>
        err ? console.log(err) : console.log(''));
        return;
    }
    renameResponses(menu) {
        switch (menu) {
            case 'Add Engineer':
                this.employeeType = 'engineer';
                this.allEmployees.push(this.employeeType);
                break;
            case 'Add Intern':
                this.employeeType = 'intern';
                this.allEmployees.push(this.employeeType);
                break;
            case 'Done.':
                this.employeeType = 'done';
                break;
        }
    }
}

module.exports = Employees;