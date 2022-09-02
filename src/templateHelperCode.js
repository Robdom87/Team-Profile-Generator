let html = {
htmlBeg :
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

    <section class="columns is-justify-content-center is-flex-wrap-wrap">`,

manager: (managerObj) => { 
    return `<section class="column is-one-third">
<article class="message is-dark">
    <div class="message-header is-flex-direction-column">
        <h2>
            <strong>${managerObj.name}</strong>
        </h2>
        <h3>
            Manager
        </h3>
    </div>
    <div class="message-body">
        <p>
            ID:&nbsp;<span>${managerObj.id}</span>
        </p>
        <p>
            Email:&nbsp;<a href="mailto: ${managerObj.email}">${managerObj.email}</a>
        </p>
        <p>
            Office Number:&nbsp;<span>${managerObj.officeNumber}</span>
        </p>
    </div>
</article>
</section>`},

engineer: (engineerObj) => { 
return `<section class="column is-one-third">
<article class="message is-dark">
    <div class="message-header is-flex-direction-column">
        <h2>
            <strong>${engineerObj.name}</strong>
        </h2>
        <h3>
            Engineer
        </h3>
    </div>
    <div class="message-body">
        <p>
            ID:&nbsp;<span>${engineerObj.id}</span>
        </p>
        <p>
            Email:&nbsp;<a href="mailto: ${engineerObj.email}">${engineerObj.email}</a>
        </p>
        <p>
            GitHub:&nbsp;<a href="https://github.com/${engineerObj.github}/" target="_blank">${engineerObj.github}</a>
        </p>
    </div>
</article>
</section>`},

intern: (internObj) => { 
    return `<section class="column is-one-third">
<article class="message is-dark">
    <div class="message-header is-flex-direction-column">
        <h2>
            <strong>${internObj.name}</strong>
        </h2>
        <h3>
            Intern
        </h3>
    </div>
    <div class="message-body">
        <p>
            ID:&nbsp;<span>${internObj.id}</span>
        </p>
        <p>
            Email:&nbsp;<a href="mailto: ${internObj.email}">${internObj.email}</a>
        </p>
        <p>
            University:&nbsp;<span>${internObj.school}</span>
        </p>
    </div>
</article>
</section>`},

htmlEnd : `</section></body></html>`}

module.exports = html;