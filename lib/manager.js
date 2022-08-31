//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Employees = require('./employee');

//manager class
class manager extends Employees{
    //builds manager object
    constructor(val) {
        this.name = val.name;
        this.employeeID = val.employeeID;
        this.email = val.email;
        this.officeID;
    }
    //function to ask the user their office ID and add their response to the index.html
    managerQuestion() {
        this.askOffice().then(() => {
            fs.appendFile('./dist/index.html',
                `<section class="column is-one-third">
        <article class="message is-dark">
            <div class="message-header is-flex-direction-column">
                <h2>
                    <strong>${this.name}</strong>
                </h2>
                <h3>
                    Manager
                </h3>
            </div>
            <div class="message-body">
                <p>
                    ID:&nbsp;<span>${this.employeeID}</span>
                </p>
                <p>
                    Email:&nbsp;<a href="mailto: ${this.email}">${this.email}</a>
                </p>
                <p>
                    Office Number:&nbsp;<span>${this.officeID}</span>
                </p>
            </div>
        </article>
    </section>`,
                (err) =>
                    err ? console.log(err) : console.log(''));
        })
    }
    //method to ask user for office ID, but should not be called directly as it is asychronous, needs .then following
    askOffice() {
        return inquirer
            .prompt([{
                type: 'input',
                name: 'officeID',
                message: 'What is your office ID?',
            },
            ])
            .then(val => {
                this.officeID = val.officeID;
            })
    }
}
module.exports = manager;