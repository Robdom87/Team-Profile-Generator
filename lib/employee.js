//packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

//calling in manager.js
const manager = require('./manager');

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

class Employees {
    start() {
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
            ])
            .then(val => {
                //once the responses are received create a new object for this manager
                const newManager = new manager(val);
                //create the index.html and write the intial portion to it
                fs.writeFile('./dist/index.html', htmlBeg, (err) =>
                err ? console.log(err) : console.log(''));
                //call managerQuestion from manager object
                newManager.managerQuestion();           
            })
    }
}

const questions = {
    //engineer only
    'username': 'What is your Github username?',
    //intern only
    'university': 'What school are you attending?'   
}

module.exports =  Employees;