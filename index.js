//importing the required files
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");



const teamMembers = [];



const promptIntern = function() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Enter the Intern's Name (Required)",
            validate: internNameInput => {
                if(internNameInput) {
                    return true;
                } else {
                    console.log("Please enter the Intern's name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "internId",
            message: "Enter the Intern's Id (Required)",
            validate: internIdInput => {
                if(internIdInput) {
                    return true;
                } else {
                    console.log("Please enter the Intern's Id!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "Enter the Intern's email (Required)",
            validate: internEmailInput => {
                if(internEmailInput) {
                    return true;
                } else {
                    console.log("Please enter the Intern's email!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "internSchool",
            message: "Enter the Intern's school name (Required)",
            validate: internSchoolInput => {
                if(internSchoolInput) {
                    return true;
                } else {
                    console.log("Please enter the Intern's school name!");
                    return false;
                }
            }
        }

    ]).then((answers) => {
        const {internName, internId, internEmail, internSchool } = answers
        const intern = new Intern(internName, internId, internEmail, internSchool )
        teamMembers.push(intern);

        promptChoicesNew();

        console.log(internName, internId, internEmail, internSchool);
    })
}




const promptEngineerNew = function() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Enter the Engineer's Name (Required)",
            validate: engineerNameInput => {
                if(engineerNameInput) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "Enter the Engineer's Id (Required)",
            validate: engineerIdInput => {
                if(engineerIdInput) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's Id!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Enter the Engineer's email (Required)",
            validate: engineerEmailInput => {
                if(engineerEmailInput) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's email!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "Enter the Engineer's Github username (Required)",
            validate: engineerGitHubInput => {
                if(engineerGitHubInput) {
                    return true;
                } else {
                    console.log("Please enter the Github username!");
                    return false;
                }
            }
        }
    

    ]).then((answers) => {
        const {engineerName, engineerId, engineerEmail, engineerGithub } = answers
        const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub )
        teamMembers.push(engineer);

        promptChoicesNew();


        console.log(engineerName, engineerId, engineerEmail, engineerGithub);
    })
}





const writeFile = function(teamMembers) {
        console.log(`received team members:`)
        console.log(teamMembers);
        const createHTMLFile = generateHTML(teamMembers);
        
        fs.writeFile('./dist/index.html', createHTMLFile, err => {
                if(err) throw new Error(err);
                    console.log('index.html created!');
        });
}



const promptChoicesNew = function() {
    inquirer.prompt([
        {
            type: "list",
            name: "choicesForEmployeeType",
            message: "Please select from the list of choices: (Required)",
            choices: ["Engineer", "Intern", "Finish building the Team!"],
            validate: choiceSelection => {
                if (choiceSelection) {
                    return true;
                } else {
                    return false;
                }
            }
        },
    ]).then((answers) => {
        const {choicesForEmployeeType} = answers;
        if (choicesForEmployeeType === "Engineer") {

            promptEngineerNew();
        }
        else if (choicesForEmployeeType === "Intern") {

            promptIntern();
        }
        else if(choicesForEmployeeType === "Finish building the Team!") {


            console.log("create html")
            console.log(teamMembers)

            writeFile(teamMembers);

        }

    })
    
}







const promptManagerNew = function() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            // name: getName()
            message: "Enter Team Manager's Name (Required)",
            validate: managerNameInput => {
                if(managerNameInput) {
                    return true;
                } else {
                    console.log("Please enter the Team Manager's name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "Enter your Employee Id (Required)",
            validate: employeeIdInput => {
                if(employeeIdInput) {
                    return true;
                } else {
                    console.log("Please enter your the Employee Id!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Enter your email: (Required)",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Please enter your email!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "Enter your Office Number: (Required)",
            validate: officeNumberInput => {
                if(officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter your Office Number!");
                    return false;
                }
            }
        }
    ]).then((answers) => {
        const {managerName, managerId, managerEmail, managerOfficeNumber } = answers
        const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber )
        teamMembers.push(manager);

        promptChoicesNew();



        console.log(managerName, managerId, managerEmail, managerOfficeNumber);
    })
}




promptManagerNew();





