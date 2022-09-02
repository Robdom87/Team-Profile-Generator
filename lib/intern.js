//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./employee');
const Engineer = require('./engineer');
const Manager = require('./manager');


//manager class
class Intern extends Employee{
    //builds manager object
    constructor() {
        super(new Employee());
        this.school;
    }
    getRole(){
        return 'intern';
    }
    questions() {
        this.getName()
            .then(val => {
                this.name = val.name;
                this.getID()
                    .then(val => {
                        this.id = val.employeeID;
                        this.getEmail()
                            .then(val => {
                                this.email = val.email;
                                this.getSchool();
                            })
                    })
            })
    }
    getSchool() {
        return inquirer
            //ask the user the intial questions
            .prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: 'What is your school?',
                },
                {
                    type: 'list',
                    name: 'menu',
                    message: 'Are you satisfied with your team?',
                    choices: ['Add Engineer', 'Add Intern', 'Done.'],
                },])
            .then(val => {
                this.school = val.school;
                this.add = val.menu;
                this.internSectionWrite();
            })
    }
    checkNext(type) {
        switch (type) {
            case 'Add Engineer':
                console.log('Engineer');
                const newEngineer = new Engineer();
                newEngineer.questions();
                break;
            case 'Add Intern':
                console.log('Intern');
                const newIntern = new Intern();
                newIntern.questions();
                break;
            case 'Done.':
                this.end();
                break;
        }
    }
    internSectionWrite () {
        fs.appendFile('./dist/index.html',
        `<section class="column is-one-third">
        <article class="message is-dark">
            <div class="message-header is-flex-direction-column">
                <h2>
                    <strong>${this.name}</strong>
                </h2>
                <h3>
                    Intern
                </h3>
            </div>
            <div class="message-body">
                <p>
                    ID:&nbsp;<span>${this.id}</span>
                </p>
                <p>
                    Email:&nbsp;<a href="mailto: ${this.email}">${this.email}</a>
                </p>
                <p>
                    University:&nbsp;<span>${this.school}</span>
                </p>
            </div>
        </article>
    </section>`, (err) => err ? console.log(err) : this.checkNext(this.add));
    }
}

module.exports = Intern;