// packages required for application
const fs = require('fs');
const inquirer = require('inquirer');
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");
const employee = require("./lib/Employee");


const teamMembers = [];
let managers;
let teamName;

// Array of questions for user input
function managerInfo() 
{
    inquirer
    .prompt([
    {
       type: 'input',
       name: 'name',
       message: 'What is managers name?',
     },
   {
       type: 'input', 
       name: 'id',
       message: 'What is the managers employee ID?'
   },
   {
       type: 'input', 
       name: 'email',
       message: 'What is the managers email?'
   },
   
   {
       type: 'input', 
       name: 'office',
       message: 'What is the managers office?'
   },
   {
       name: 'menu',
       type: 'list', 
       choices: ["Add an engineer", "add an intern", "generate my team"],
       message: 'What would you to do next?',
    },
   ]).then(response => {
       teamMembers.push(new manager(response.name, response.id, response.email, response.office));
       if(response.menu === "Add an engineer") {
           engineerInfo();
       }
       else if (response.menu === "add an intern"){
            internInfo();
       }
       else {
           renderHTML();
       }
      
   })
}
function engineerInfo() {
    inquirer
        .prompt([
    {
       type: 'input',
       name: 'name',
       message: 'What is the engineers name?',
     },
   {
       type: 'input', 
       name: 'id',
       message: 'What is the engineers employee ID?'
   },
   {
       type: 'input', 
       name: 'email',
       message: 'What is the engineers email?'
   },
   
   {
       type: 'input', 
       name: 'github',
       message: 'What is the engineers github?'
   },
   {
       name: 'menu',
       type: 'list', 
       choices: ["Add an engineer", "add an intern", "generate my team"],
       message: 'What would you to do next?',
    },
])
.then(response => {
    teamMembers.push(new engineer(response.name, response.id, response.email, response.github));
    if(response.menu === "Add an engineer") {
        engineerInfo();
    }
    else if (response.menu === "add an intern"){
         internInfo();
    }
    else {
        renderHTML();
    }
   
})
}

function internInfo() {
    inquirer
        .prompt([
    {
       type: 'input',
       name: 'name',
       message: 'What is the interns name?',
     },
   {
       type: 'input', 
       name: 'id',
       message: 'What is the interns employee ID?'
   },
   {
       type: 'input', 
       name: 'email',
       message: 'What is the interns email?'
   },
   
   {
       type: 'input', 
       name: 'school',
       message: 'What is the interns school?'
   },
   {
       name: 'menu',
       type: 'list', 
       choices: ["Add an engineer", "add an intern", "generate my team"],
       message: 'What would you to do next?',
    },
])
.then(response => {
    teamMembers.push(new intern(response.name, response.id, response.email, response.school));
    if(response.menu === "Add an engineer") {
        engineerInfo();
    }
    else if (response.menu === "add an intern"){
         internInfo();
    }
    else {
        renderHTML();
    }   
})
}
function renderHTML() {
    let managerCard = fs.readFileSync('./src/manager.html', 'utf8');
    managerCard = managerCard.replace('{{name}}', teamMembers[0].name);
    managerCard = managerCard.replace('{{id}}', teamMembers[0].id);
    managerCard = managerCard.replace(/{{email}}/g, teamMembers[0].email);
    managerCard = managerCard.replace('{{office}}', teamMembers[0].office);
    
    let cards = managerCard;
    let newCards = "";

    // loop through every employee
    for(let i = 1; i < teamMembers.length; i++) {
        if(teamMembers[i].role === "Engineer"){
            newCard = fs.readFileSync('./src/engineer.html', 'utf8')
            newCard = newCard.replace('{{name}}', teamMembers[i].name);
            newCard = newCard.replace('{{id}}', teamMembers[i].id);
            newCard = newCard.replace(/{{email}}/g, teamMembers[i].email);
            newCard = newCard.replace(/{{github}}/g, teamMembers[i].github);
        }else {
            newCard = fs.readFileSync('./src/intern.html', 'utf8')
            newCard = newCard.replace('{{name}}', teamMembers[i].name);
            newCard = newCard.replace('{{id}}', teamMembers[i].id);
            newCard = newCard.replace(/{{email}}/g, teamMembers[i].email);
            newCard = newCard.replace('{{school}}', teamMembers[i].school);
        }
        cards += newCard;
    }
    let mainPage = fs.readFileSync('./src/main.html', 'utf8');
    mainPage = mainPage.replace('{{cards}}',cards);

    fs.writeFileSync('./dist/index.html', mainPage);
}
managerInfo();