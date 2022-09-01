//packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const template = require('./src/templateHelperCode');

function start() {
    //create the index.html and write the intial portion to it
    fs.writeFile('./dist/index.html', template.htmlBeg, (err) =>
        err ? console.log(err) : newEmployee('manager'));
}

function newEmployee(type) {
    switch (type) {
        case 'manager':
            const newManager = new Manager();
            newManager.employeeQuestions()
            .then();
            break;
        case 'engineer':
            const newEngineer = new Engineer();
            break;
        case 'intern':
            const newIntern = new Intern();
            break;
        case 'done':
            end();
            break;
    }
    const newEmployee = new Employee(type);
}

// function createManager() {
//     return inquirer
//         //ask the user the intial questions
//         .prompt([
//             {
//                 type: 'input',
//                 name: 'name',
//                 message: "What is your name?",
//             },
//             {
//                 type: 'input',
//                 name: 'employeeID',
//                 message: 'What is your employee ID?',
//             },
//             {
//                 type: 'input',
//                 name: 'email',
//                 message: 'What is your email?',
//             },
//             {
//                 type: 'input',
//                 name: 'officeID',
//                 message: 'What is your office ID?',
//             },
//             {
//                 type: 'list',
//                 name: 'menu',
//                 message: 'Are you satisfied with your team?',
//                 choices: ['Add Engineer', 'Add Intern', 'Done.'],
//             },
//         ])
//         .then(val => {
//             //once the responses are received create a new object for this manager
//             const newManager = new manager(val);
//             renameResponses(val.menu);
//             //call managerQuestion from manager object
//             newManager.managerSectionWrite();
//             newEmployee();
//         })
// }

// function createEngineer() {
//     return inquirer
//         //ask the user the intial questions
//         .prompt([
//             {
//                 type: 'input',
//                 name: 'name',
//                 message: "What is your name?",
//             },
//             {
//                 type: 'input',
//                 name: 'employeeID',
//                 message: 'What is your employee ID?',
//             },
//             {
//                 type: 'input',
//                 name: 'email',
//                 message: 'What is your email?',
//             },
//             {
//                 type: 'input',
//                 name: 'username',
//                 message: 'What is your Github username?',
//             },
//             {
//                 type: 'list',
//                 name: 'menu',
//                 message: 'Are you satisfied with your team?',
//                 choices: ['Add Engineer', 'Add Intern', 'Done.'],
//             },
//         ])
//         .then(val => {
//             //once the responses are received create a new object for this manager
//             const newEngineer = new engineer(val);
//             renameResponses(val.menu);
//             //call managerQuestion from manager object
//             newEngineer.engineerSectionWrite();
//             newEmployee();
//         })
// }

// function createIntern() {
//     return inquirer
//         //ask the user the intial questions
//         .prompt([
//             {
//                 type: 'input',
//                 name: 'name',
//                 message: "What is your name?",
//             },
//             {
//                 type: 'input',
//                 name: 'employeeID',
//                 message: 'What is your employee ID?',
//             },
//             {
//                 type: 'input',
//                 name: 'email',
//                 message: 'What is your email?',
//             },
//             {
//                 type: 'input',
//                 name: 'university',
//                 message: 'What school are you attending?',
//             },
//             {
//                 type: 'list',
//                 name: 'menu',
//                 message: 'Are you satisfied with your team?',
//                 choices: ['Add Engineer', 'Add Intern', 'Done.'],
//             },
//         ])
//         .then(val => {
//             //once the responses are received create a new object for this manager
//             const newIntern = new intern(val);
//             renameResponses(val.menu);
//             //call managerQuestion from manager object
//             newIntern.internSectionWrite();
//             newEmployee();
//         })
// }

// function end() {
//     fs.appendFile('./dist/index.html', template.htmlEnd, (err) =>
//         err ? console.log(err) : console.log(''));
//     return;
// }

// function renameResponses(menu) {
//     switch (menu) {
//         case 'Add Engineer':
//             employeeType = 'engineer';
//             allEmployees.push(this.employeeType);
//             break;
//         case 'Add Intern':
//             employeeType = 'intern';
//             allEmployees.push(this.employeeType);
//             break;
//         case 'Done.':
//             employeeType = 'done';
//             break;
//     }
// }

start();
