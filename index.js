//call in required packages
const fs = require('fs');
const inquirer = require('inquirer');

//call in subclasses
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//call in template object
const template = require('./src/templateHelperCode');

//create global vraible to hold manager, engineer and intern objects
let newManager = {};
const allEngineers = [];
const allInterns = [];

//function defintion to intiate program
function start() {
    console.log("Welcome! Let's create your team.\n\nPlease input the manager's information.")
    createManager();
}

//function to ask users for info and create the coinciding manager, engineer, and intern objects
function createManager() {
    return inquirer
        //ask the user the intial questions
        .prompt(employeePrompt('Manager'))
        .then(val => {
            //once the responses are received create a new object for this manager
            newManager = new Manager(val);
            newEmployee(val.menu);
        })
}

function createEngineer() {
    return inquirer
        .prompt(employeePrompt('Engineer'))
        .then(val => {
            //once the responses are received create a new object for this engineer
            const newEngineer = new Engineer(val);
            allEngineers.push(newEngineer);
            newEmployee(val.menu);
        })
}

function createIntern() {
    return inquirer
        .prompt(employeePrompt('Intern'))
        .then(val => {
            //once the responses are received create a new object for this intern
            const newIntern = new Intern(val);
            allInterns.push(newIntern);
            newEmployee(val.menu);
        })
}

//all employee types prompt with dynamic 4th question
function employeePrompt(type) {
    return [
        {
            type: 'input',
            name: 'name',
            message: "What is their name?",
            //validation to check if input any character besides alphabet
            validate: function (input) {
                // Declare function as asynchronous, and save the done callback
                const done = this.async();

                // Do async stuff
                setTimeout(function () {
                    const nameCheck = /[`~!@#$%^&*()_+=|"';:?/><.,0-9]/;
                    if (nameCheck.test(input)) {
                        // Pass the return value in the done callback
                        done('Only alphabet characters are allowed!');
                        return;
                    }
                    // Pass the return value in the done callback
                    done(null, true);
                }, 1000);
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is their employee ID?",
            //validation to check if input any character besides numeric
            validate: function (input) {
                // Declare function as asynchronous, and save the done callback
                const done = this.async();

                // Do async stuff
                setTimeout(function () {
                    const idCheck = /[`~!@#$%^&*()_+=|"';:?/><.,A-Za-z]/;
                    if (idCheck.test(input)) {
                        // Pass the return value in the done callback
                        done('Only numeric characters are allowed!');
                        return;
                    }
                    // Pass the return value in the done callback
                    done(null, true);
                }, 1000);
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is their email?",
            validate: function (input) {
                // Declare function as asynchronous, and save the done callback
                const done = this.async();

                // Do async stuff
                setTimeout(function () {
                    const emailCheck = /\w+@\w+.\w/;
                    if (!emailCheck.test(input)) {
                        // Pass the return value in the done callback
                        done('Please input valid email!');
                        return;
                    }
                    // Pass the return value in the done callback
                    done(null, true);
                }, 2000);
            }
        },
        {
            type: 'input',
            name: promptCheck(type).name,
            message: promptCheck(type).message,
            validate: function (input) {
                // Declare function as asynchronous, and save the done callback
                const done = this.async();

                // Do async stuff
                setTimeout(function () {
                    const check = promptCheck(type).check;
                    if (check.test(input)) {
                        // Pass the return value in the done callback
                        done(promptCheck(type).checkMessage);
                        return;
                    }
                    // Pass the return value in the done callback
                    done(null, true);
                }, 1000);
            }
        },
        {
            type: 'list',
            name: 'menu',
            message: "Add more team members?",
            choices: ['Engineer', 'Intern', 'Done.']
        }
    ]
}

//decision tree that decides what is displayed for the fourth question
function promptCheck(type) {
    switch (type) {
        case 'Manager':
            return {
                name: 'officeNumber',
                message: "What is their office ID?",
                check: /[`~!@#$%^&*()_+=|"';:?/><.,A-Za-z]/,
                checkMessage: 'Only numeric characters are allowed!'
            };
        case 'Engineer':
            return {
                name: 'github',
                message: "What is their GitHub username?",
                check: /[`~!@#$%^&*()_+=|"';:?/><.,]/,
                checkMessage: 'Only alphanumperic characters are allowed!'
            };
        case 'Intern':
            return {
                name: 'school',
                message: "What is their school?",
                check: /[`~!@#$%^&*()_+=|"';:?/><.,0-9]/,
                checkMessage: 'Only alphabet characters are allowed!'
            };
    }
}

//function to direct new direct user to correct functionality depending on their selection
function newEmployee(type) {
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


//function to write file once all object are created and user selects done
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