const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const template = require('./src/templateHelperCode');

let newManager = {};
const allEngineers = [];
const allInterns = [];



function start() {
    console.log("Welcome! Let's create your team.\n\nPlease input the manager's information.")
    createManager();
}

function createManager() {
    return inquirer
        //ask the user the intial questions
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the manager's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's employee ID?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email?",
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the manager's office ID?",
            },
            {
                type: 'list',
                name: 'menu',
                message: "Add more team members?",
                choices: ['Engineer', 'Intern', 'Done.'],
            },
        ])
        .then(val => {
            //once the responses are received create a new object for this manager
            newManager = new Manager(val);
            newEmployee(val.menu);
        })
}

function newEmployee(type){
    switch (type) {
        case 'Engineer':
            console.log(type);
            createEngineer();
            break;
        case 'Intern':
            console.log(type);
            createIntern();
            break;
        case 'Done.':
            console.log(type);
            writeFile();
            break;
    }
}

function createEngineer() {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's employee ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?",
        },
        {
            type: 'list',
            name: 'menu',
            message: "Add more team members?",
            choices: ['Engineer', 'Intern', 'Done.'],
        },
    ])
    .then(val => {
        //once the responses are received create a new object for this manager
        const newEngineer = new Engineer(val);
        allEngineers.push(newEngineer);
        newEmployee(val.menu);
    })
}

function createIntern() {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's employee ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?",
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
        },
        {
            type: 'list',
            name: 'menu',
            message: "Add more team members?",
            choices: ['Engineer', 'Intern', 'Done.'],
        },
    ])
    .then(val => {
        //once the responses are received create a new object for this manager
        const newIntern = new Intern(val);
        allInterns.push(newIntern);
        newEmployee(val.menu);
    })
}

function writeFile() {
    let writtenHtml = template.htmlBeg + template.manager(newManager);
    for (let i = 0; i < allEngineers.length; i++) {
        writtenHtml += template.engineer(allEngineers[i]);
    }
    for (let i = 0; i < allInterns.length; i++) {
        writtenHtml += template.intern(allInterns[i]);
    }
    writtenHtml += template.htmlEnd;
    fs.writeFile('./dist/index.html', writtenHtml, (err) =>
        err ? console.log(err) : console.log('HTML successfully created!'));
}

start();