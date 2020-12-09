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
  
    function viewEmployees (){
        var query = connection.query(`SELECT employee.id, first_name as First_Name, last_name as Last_Name, title as Job_Title, salary as Salary, name as Department
        FROM ((employee
        INNER JOIN role ON employee.role_id = role.id)
        INNER JOIN department ON role.department_id = department.id)
        `, function(err, res){
            console.table(res);
        });

       init();
    };

   