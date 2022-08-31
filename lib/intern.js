//packages needed for this application
const fs = require('fs');

//manager class
class intern {
    //builds manager object
    constructor(val) {
        this.name = val.name;
        this.employeeID = val.employeeID;
        this.email = val.email;
        this.university = val.university;
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
                    ID:&nbsp;<span>${this.employeeID}</span>
                </p>
                <p>
                    Email:&nbsp;<a href="mailto: ${this.email}">${this.email}</a>
                </p>
                <p>
                    University:&nbsp;<span>${this.university}</span>
                </p>
            </div>
        </article>
    </section>`, (err) => err ? console.log(err) : console.log(''));
    }
}

module.exports = intern;