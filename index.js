let inquirer = require('inquirer');
let Employee = require('./lib/Employee');
let Engineer = require('./lib/Engineer');
let Intern = require('./lib/Intern');
let Manager = require('./lib/Manager');
let fs = require('fs');

let myTeamHtml = [];

function managerInfo() {
inquirer
 .prompt([
   {type: 'input',
    message: 'Please enter your name here',
    name: 'name',
   },
   {type: 'input',
   message: 'Please enter your employeeID here',
   name: 'employeeID',
   },
   {type: 'input',
   message: 'Please enter your email address here',
   name: 'emailaddress',
   },
   {type: 'input',
   message: 'Please enter your office number here',
   name: 'officenumber',
   },
 ])   
 .then((response) => {
  const{name, employeeID, emailaddress, officenumber } = response;
  //assign the value to the manager object;
  const manager = new Manager(name, employeeID, emailaddress, officenumber)

  const managerHTML = `
  <div class="card" style="width: 18rem;">
  <div class="card-header">
        ${manager.getRole()}
  </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${manager.name}</li>
        <li class="list-group-item">Employee ID:${manager.id} </li>
        <li class="list-group-item">Email Address: ${manager.email}</li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
      </ul>
  </div>
  `
  myTeamHtml.push(managerHTML);
  pickEmployee();
 })
}

managerInfo();

function internInfo() {
  inquirer
   .prompt([
     {type: 'input',
      message: 'Please enter your name here',
      name: 'name',
     },
     {type: 'input',
     message: 'Please enter your employeeID here',
     name: 'employeeID',
     },
     {type: 'input',
     message: 'Please enter your email address here',
     name: 'emailaddress',
     },
     {type: 'input',
     message: 'Please enter your school name',
     name: 'school',
     },
   ])   
   .then((response) => {
    const{name, employeeID, emailaddress, school } = response;
    const intern = new Intern(name, employeeID, emailaddress, school)

   const internHtml = `
   <div class="card" style="width: 18rem;">
   <div class="card-header">
     ${intern.getRole()}
   </div>
   <ul class="list-group list-group-flush">
     <li class="list-group-item">Name: ${intern.name}</li>
     <li class="list-group-item">Employee ID: ${intern.id}</li>
     <li class="list-group-item">Email Address: ${intern.email}</li>
     <li class="list-group-item">School: ${intern.school}</li>
   </ul>
   </div>
   `
   myTeamHtml.push(internHtml)
    pickEmployee();
   })
  }


  function engineerInfo() {
    inquirer
     .prompt([
       {type: 'input',
        message: 'Please enter your name here',
        name: 'name',
       },
       {type: 'input',
       message: 'Please enter your employeeID here',
       name: 'employeeID',
       },
       {type: 'input',
       message: 'Please enter your email address here',
       name: 'emailaddress',
       },
       {type: 'input',
       message: 'Please enter your github username',
       name: 'githubName',
       },
     ])   
     .then((response) => {
      const{name, employeeID, emailaddress, githubName } = response;//destruture reponse to get the value of each input by entering the name of the property;
      const engineer = new Engineer(name, employeeID, emailaddress, githubName)

      const engineerHtml = `
      <div class="card" style="width: 18rem;">
      <div class="card-header">
        ${engineer.getRole()}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Name: ${engineer.name}</li>
        <li class="list-group-item">Employee ID: ${engineer.id}</li>
        <li class="list-group-item">Email Address: ${engineer.email}</li>
        <li class="list-group-item">Github Username: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
      </ul>
      </div>
      `
      myTeamHtml.push(engineerHtml);
      pickEmployee();
     })
    }


    function pickEmployee() {
      inquirer
      .prompt([
        {type: 'list',
        message: 'Please select which employee you like to continue with',
        name: 'employeeType',
        choices: ['Engineer', 'Intern', 'Finish']
       },
      ])
      .then((response) => {
        const {employeeType} = response;
        console.log(employeeType)
        switch(employeeType) {
          case 'Engineer':
            engineerInfo();
            break;
          case 'Intern':
            internInfo();
            break;
          case 'Finish' :
            generateHtml();
        }
      })
    }

function generateHtml(){
  const myteam = myTeamHtml.join('');
  const myPage = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="./stylesheet.css" />
    <title>Team Member Generator</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-6">My Team</h1>
        </div>
      </div>
    <div id="employee">
    ${myteam}
    </div>
</body>
</html>
  `
  fs.writeFile('./dist/index.html', myPage, (err) => {
    err? console.log(err) :  console.log('Sucessfully generate the html file!')
  })
}