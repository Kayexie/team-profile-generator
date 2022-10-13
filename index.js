let inquirer = require('inquirer');
let Employee = require('./lib/Employee');
let Engineer = require('./lib/Engineer');
let Intern = require('./lib/Intern');
let Manager = require('./lib/Manager');
let fs = require('fs');

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
  console.log('Sucessfully generate the html file!')
}