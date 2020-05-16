//importing the required files
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");


//array to collect all data from all team members
const teamMembers = [];


//function to prompt for the Intern questions
const promptIntern = function() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Enter the Intern's Name (Required)",
            validate: internNameInput => {
                if(internNameInput.match("[a-zA-Z]+$")) {
                    return true;
                } else {
                    console.log("Please enter the Intern's name as a string!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "internId",
            message: "Enter the Intern's Id (Required)",
            validate: internIdInput => {
                if(internIdInput.match("[1-9]+$")) {
                    return true;
                } else {
                    console.log("Please enter the Intern's Id as a number!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "Enter the Intern's email (Required)",
            validate: internEmailInput => {
                if(internEmailInput.match("[a-zA-Z@]+$")) {
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
                if(internSchoolInput.match("[a-zA-Z]+$")) {
                    return true;
                } else {
                    console.log("Please enter the Intern's school name as a string!");
                    return false;
                }
            }
        }

    ]).then((answers) => {
        const {internName, internId, internEmail, internSchool } = answers
        const intern = new Intern(internName, internId, internEmail, internSchool )
        teamMembers.push(intern);

        //once the answers have been collected and passed into the object and a new instance of a object was created for this object, then the additional employee prompt is called
        promptChoicesNew();

        console.log(internName, internId, internEmail, internSchool);
    })
}



//function to prompt for the Engineer questions
const promptEngineerNew = function() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Enter the Engineer's Name (Required)",
            validate: engineerNameInput => {
                if(engineerNameInput.match("[a-zA-Z]+$")) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's name as a string!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "Enter the Engineer's Id (Required)",
            validate: engineerIdInput => {
                if(engineerIdInput.match("[1-9]+$")) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's Id as a number!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Enter the Engineer's email (Required)",
            validate: engineerEmailInput => {
                if(engineerEmailInput.match("[a-zA-Z@]+$")) {
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
                if(engineerGitHubInput.match("[a-zA-Z]+$")) {
                    return true;
                } else {
                    console.log("Please enter the Github username as a string!");
                    return false;
                }
            }
        }
    

    ]).then((answers) => {
        const {engineerName, engineerId, engineerEmail, engineerGithub } = answers
        const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub )
        teamMembers.push(engineer);

        //once the answers have been collected and passed into the object and a new instance of a object was created for this object, then the additional employee prompt is called
        promptChoicesNew();


        console.log(engineerName, engineerId, engineerEmail, engineerGithub);
    })
}




//function to write the final file based on the array teamMembers that has now all the team members
const writeFile = function(teamMembers) {
        const createHTMLFile = generateHTML(teamMembers);
        
        fs.writeFile('./dist/index.html', createHTMLFile, err => {
                if(err) throw new Error(err);
                    console.log('index.html created!');
        });
}


//function to promp to add additional team member
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

            //prompt for the Engineer data function call
            promptEngineerNew();
        }
        else if (choicesForEmployeeType === "Intern") {

            //prompt for the Intern data function call
            promptIntern();
        }
        else if(choicesForEmployeeType === "Finish building the Team!") {

            //call the write file function by passing in the teamMembers array data
            writeFile(teamMembers);

        }

    })
    
}



//function to prompt for the manager questions
const promptManagerNew = function() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Enter Team Manager's Name (Required)",
            validate: managerNameInput => {
                if(managerNameInput.match("[a-zA-Z]+$")) {
                    return true;
                } else {
                    console.log("Please enter the Team Manager's name as a string!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "Enter your Employee Id (Required)",
            validate: employeeIdInput => {
                if(employeeIdInput.match("[1-9]+$")) {
                    return true;
                } else {
                    console.log("Please enter your the Employee Id as a number!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Enter your email: (Required)",
            validate: emailInput => {
                if(emailInput.match("[a-zA-Z@]+$")) {
                    return true;
                } else {
                    console.log("Please enter your email as a string!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "Enter your Office Number: (Required)",
            validate: officeNumberInput => {
                if(officeNumberInput.match("[1-9]+$")) {
                    return true;
                } else {
                    console.log("Please enter your Office Number as a number!");
                    return false;
                }
            }
        }
    ]).then((answers) => {
        const {managerName, managerId, managerEmail, managerOfficeNumber } = answers
        const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber )
        teamMembers.push(manager);

        //once the answers have been collected and passed into the object and a new instance of a object was created for this object, then the additional employee prompt is called
        promptChoicesNew();


        console.log(managerName, managerId, managerEmail, managerOfficeNumber);
    })
}




//call the promptManagerNew function which will then call the rest of the functions
promptManagerNew();





