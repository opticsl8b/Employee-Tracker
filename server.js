// import NS modules
const inquirer = require('inquirer');
const mysql = require('mysql2');
const clc = require('cli-color');
require('console.table');

// import connection 
const connection = require("./config/connection");

// import prompt method
const { interactWithUser } = require("./src/prompts");

// set up connection and handle prompts
connection.connect((err)=>{
    if (err) throw err;
    interactWithUser()
})