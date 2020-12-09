const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,
  
    user: "root",
  
    password: "",
    database: "employees_DB"
  });

  connection.connect(function(err) {
    if (err) throw err;
    init();
  });


  function init(){
    inquirer
    .prompt({
      name: "todo",
      type: "list",
      message: "What would you like to do?",
      choices: ["View all Employees", "Add Employee","Exit"]
    })
    .then(function(answer) {
        if (answer.todo === "View all Employees") {
            viewEmployees();
          }
          else if(answer.todo === "Add Employee") {
            addEmployee();
          } 
          else{
            connection.end();
          }
        });
    }
  
    function viewEmployees (){};
    function addEmployee (){};


