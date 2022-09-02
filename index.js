//packages needed for application
// const inquirer = require('inquirer');
const fs = require('fs');

// const Employee = require('./lib/employee');
const Manager = require('./lib/manager');

const template = require('./src/templateHelperCode');

console.log("Welcome! Let's make your team.\n\nPlease provide the managers information.")
const newTeam = new Manager();
fs.writeFile('./dist/index.html', template.htmlBeg, (err) =>
        err ? console.log(err) : newTeam.questions());