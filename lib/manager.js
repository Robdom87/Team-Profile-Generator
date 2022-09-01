//packages needed for this application
const fs = require('fs');
const Employee = require('./employee');

//manager class
class Manager extends Employee {
    //builds manager object 
    constructor() {
        super(new Employee());
        this.officeID;
    }
    managerSectionWrite () {
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
</section>`, (err) => err ? console.log(err) : console.log(''));
    }
}

module.exports = Manager;