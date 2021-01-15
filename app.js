const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// Comment out later
const Employee = require("./lib/Employee");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { type } = require("os");
const { breakStatement } = require("@babel/types");
const { Console } = require("console");

const employees = [];

const addEmployee = [
  {
    type: "list",
    message: "Which team members would you like to add?",
    name: "addEmployee",
    choices: [{ name: "none" }, { name: "Intern" }, { name: "Engineer" }],
  },
];
function addToTeam() {
  console.log("Which Team member would you like to add?");
  inquirer.prompt(addEmployee).then((response) => {
    // // SWITCH FUNCTION  -->
    switch (response.addEmployee) {
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      default:
        // Call to build our team
        console.log("Your team has been created");
        buildTeam();
    }
    // Create a function to write README file
  });
}

const managerQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },

  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your Office Number?",
    name: "officeNumber",
  },
];
const addManager = () => {
  inquirer.prompt(managerQuestions).then((response) => {
    const manager = new Manager(
      response.name,
      response.email,
      response.id,
      response.officeNumber
    );
    employees.push(manager);
    addToTeam();
  });
};

const internQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your is your school/university name?",
    name: "school",
  },
];
const addIntern = () => {
  inquirer.prompt(internQuestions).then((response) => {
    const intern = new Intern(
      response.name,
      response.email,
      response.id,
      response.school
    );
    employees.push(intern);
    addToTeam();
  });
};
const engineerQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your Github user ID?",
    name: "github",
  },
];
const addEngineer = () => {
  inquirer.prompt(engineerQuestions).then((response) => {
    const engineer = new Engineer(
      response.name,
      response.email,
      response.id,
      response.github
    );
    employees.push(engineer);
    addToTeam();
  });
};
console.log("Enter information about the manager:");
addManager();
// Create a function to write README file
function buildTeam() {
  fs.writeFileSync("employee.html", render(employees), "utf8");
}

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
