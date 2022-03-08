const inquirer = require("inquirer"); // inquirer module
const clc = require("cli-color"); // color module

const Departments = require("../lib/Departments");
const Roles = require("../lib/Roles");
const Employees = require("../lib/Employees");
const employeeHandler = require("../src/employees");
const departmentHandler = require("../src/departments");
const roleHandler = require("../src/roles");

const employees = new Employees();
const roles = new Roles();
const deparments = new Departments();

const whatWouldYouLikeToDoPrompt = () => {
  return inquirer.prompt({
    type: "list",
    name: "action",
    message: clc.black.bgWhite("What would you like to do?"),
    choices: [
      "View All Departments",
      "Add Department",
      "Remove Department",
      new inquirer.Separator(),
      "View All Roles",
      "Add Role",
      "Remove Role",
      new inquirer.Separator(),
      "View All Employees",
      "Add Employee",
      "Remove Employee",
      new inquirer.Separator(),
      "Update Employee Role",
      "Update Employee Manager",
      new inquirer.Separator(),
      "View Employees by Department",
      "View Employees by Manager",
      new inquirer.Separator(),
      "Order All Employees By Department",
      "Order All Employees By Manager",
      new inquirer.Separator(),
      "View Total Utilized Budget of a Department",
      new inquirer.Separator(),
      clc.red.bgWhite("Exit the application"),
      new inquirer.Separator(),
    ],
  });
};

const interactWithUser = () => {
  whatWouldYouLikeToDoPrompt()
    .then(({ action }) => {
      switch (action) {
        case clc.red.bgWhite("Exit the application"):
          console.log(clc.green.bgWhite("See You Next Time!!"));
          return process.exit();
        case "View All Departments":
          return departmentHandler.handleAllDeparmentsView();
        case "View All Roles":
          return roleHandler.handleAllRolesView();
        case "View All Employees":
          return employees.getAllEmployees();
        case "Order All Employees By Department":
          return employees.getAllEmployeesByDepartment();
        case "Order All Employees By Manager":
          return employees.getAllEmployeesByManager();
        case "Add Employee":
          return employeeHandler.handleNewEmployee();
        case "Remove Employee":
          return employeeHandler.handleRemoveEmployee();
        case "Update Employee Role":
          return employeeHandler.handleUpdateEmployeeRole();
        case "Update Employee Manager":
          return employeeHandler.handleUpdateEmployeeManager();
        case "Add Department":
          return departmentHandler.handleNewDepartment();
        case "Remove Department":
          return departmentHandler.handleRemoveDepartment();
        case "Add Role":
          return roleHandler.handleNewRole();
        case "Remove Role":
          return roleHandler.handleRemoveRole();
        case "View Employees by Department":
          return employeeHandler.handleViewEmployeesByDepartment();
        case "View Employees by Manager":
          return employeeHandler.handleViewEmployeesByManagers();
        case "View Total Utilized Budget of a Department":
          return departmentHandler.handleDepartmentLevelBudget();
      }
    })
    .then(() => {
      return interactWithUser();
    });
};

module.exports = { interactWithUser };
