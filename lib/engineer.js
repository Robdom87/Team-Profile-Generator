//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./employee');
const Intern = require('./intern');

//manager class
class Engineer extends Employee{
    //builds manager object
    constructor() {
        super(new Employee());
        this.github;
    }
    getRole(){
        return 'engineer';
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
                                this.getGithub();
                            })
                    })
            })
    }
    getGithub() {
        return inquirer
            //ask the user the intial questions
            .prompt([
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is your GitHub?',
                },
                {
                    type: 'list',
                    name: 'menu',
                    message: 'Are you satisfied with your team?',
                    choices: ['Add Engineer', 'Add Intern', 'Done.'],
                },])
            .then(val => {
                this.github = val.github;
                this.add = val.menu;
                this.engineerSectionWrite();
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
    engineerSectionWrite () {
        fs.appendFile('./dist/index.html',
        `<section class="column is-one-third">
        <article class="message is-dark">
            <div class="message-header is-flex-direction-column">
                <h2>
                    <strong>${this.name}</strong>
                </h2>
                <h3>
                    Engineer
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
                    GitHub:&nbsp;<a href="https://github.com/${this.github}/" target="_blank">${this.github}</a>
                </p>
            </div>
        </article>
    </section>`, (err) => err ? console.log(err) : this.checkNext(this.add));
    }
}

module.exports = Engineer;