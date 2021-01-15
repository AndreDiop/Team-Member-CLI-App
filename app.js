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
  // fs.writeFileSync("team.html", render(employees), "utf8");
  if (fs.existsSync(OUTPUT_DIR)) {
    fs.writeFileSync(outputPath, render(employees), "utf8");
  } else {
    fs.mkdir(OUTPUT_DIR, (err) => {
      if (err) {
        console.log("Error making your folder!");
      } else {
        fs.writeFileSync(outputPath, render(employees), "utf8");
      }
    });
  }
}
