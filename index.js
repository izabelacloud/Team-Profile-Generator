const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//initialization of the fs function
const fs = require("fs");

//importing the generateMarkdown file into the index.js file
// const generateHTML = require("./src/generateHTML");

// // array of questions for user
// const questions = [

// ]

// //function to invoke the questions for the user
// const init = function() {

// }

// () => {
//     return inquirer.prompt({
//             type: "input",
//             name: "name",
//             message: "Enter Manager's Name (Required)",
//             validate: managerNameInput => {
//                 if(managerNameInput) {
//                     return true;
//                 } else {
//                     console.log("Please enter the Manager's name!");
//                     return false;
//                 }
//             }
//         },
//         {
//             type: "input",
//             name: "id",
//             message: "Enter your Employee Id (Required)",
//             validate: employeeIdInput => {
//                 if(employeeIdInput) {
//                     return true;
//                 } else {
//                     console.log("Please enter your the Employee Id!");
//                     return false;
//                 }
//             }
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "Enter your email: (Required)",
//             validate: emailInput => {
//                 if(emailInput) {
//                     return true;
//                 } else {
//                     console.log("Please enter your email!");
//                     return false;
//                 }
//             }
//         }

    
//     )
// }

// //initialization of the function calls
// init();
// //     .then(userAnswerData => {
// //         const readUserAnswerData = generateHTML(userAnswerData);
// //         console.log(userAnswerData);
// //         fs.writeFile('index.html', readUserAnswerData, err => {
// //                 if(err) throw new Error(err);
// //                  console.log('index.html created!');
// //         });
// //     });



//function to invoke the questions for the user
const init = function() {

    return inquirer.prompt([
        {
            type: "input",
            name: "name",
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
            name: "id",
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
            name: "email",
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
            name: "officenumber",
            message: "Enter your Office Number: (Required)",
            validate: officeNumberInput => {
                if(officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter your Office Number!");
                    return false;
                }
            }
        },
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
            },
            when: (choice) => choice.choicesForEmployeeType === "Engineer"
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
            },
            when: (choice) => choice.choicesForEmployeeType === "Engineer"
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
            },
            when: (choice) => choice.choicesForEmployeeType === "Engineer"
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
            },
            when: (choice) => choice.choicesForEmployeeType === "Engineer"
        },
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
            },
            when: (choice) => choice.choicesForEmployeeType === "Intern"
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
            },
            when: (choice) => choice.choicesForEmployeeType === "Intern"
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
            },
            when: (choice) => choice.choicesForEmployeeType === "Intern"
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
            },
            when: (choice) => choice.choicesForEmployeeType === "Intern"
        }





    ])
}



//initialization of the function calls
init()


