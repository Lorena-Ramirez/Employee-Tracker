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
      choices: ["View all Employees", "Add Employee","Update Employee","Exit"]
    })
    .then(function(answer) {
        if (answer.todo === "View all Employees") {
            viewEmployees();
          }
          else if(answer.todo === "Add Employee") {
            addEmployee();
          } 
          else if(answer.todo === "Update Employee") {
            updateEmployee();
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
    function addEmployee (){
        inquirer
        .prompt([
          {
              name: "firstName",
              type: "input",
              message: "What is the employee's first name?"
            },
            {
              name: "lastName",
              type: "input",
              message: "What is the employee's last name?"
            },
            {
              name: "role",
              type: "list",
              message: "What is the employee's role?",
              choices : ["Sales Lead", "Salesperson", "Lead Engineer","Software Engineer", "Legal Team Lead","Lawyer"]
            }
  
        ]).then(function(answer) {
          
          switch(answer.role){
  
          case "Sales Lead": answer.role = 1;
          break;
  
          case "Salesperson": answer.role = 1;
          break;
  
          case "Software Engineer": answer.role = 2;
          break;
  
          case "Lead Engineer": answer.role = 2;
          break;
  
          case "Legal Team Lead": answer.role = 3;
          break;
  
          case "Lawyer": answer.role = 3;
          break;
  
          }
  
          connection.query(
            "INSERT INTO employee SET ?",
            {
              first_name: answer.firstName,
              last_name: answer.lastName,
              role_id: answer.role || 0,
            },
  
            function(err) {
              if (err) throw err;
              console.log("Your Employee was successfully added!");

              init();
            }
          );
        });
  
         
      };
  
      function updateEmployee(){
        var employee =[];
          var query = connection.query("SELECT * FROM employee", function(err, res){
           
            inquirer
            .prompt([
              {
                name: "employee",
                type: "list",
                choices: function() {
                  var choiceArray = [];
                  for (var i = 0; i < res.length; i++) {
                    choiceArray.push(res[i].first_name + " " + res[i].last_name );
                  }
                  return choiceArray;
                }
            }

        ]).then(function(answer) {
        
        });
    });

};

        // connection.query(
        //     "Update employee SET ?",
        // inquirer
        // .prompt({
        //   name: "first",
        //   type: "input",
        //   message: "Which employee would you like to update?"
        // })
        // .then(function(answer) {
        //   var query = "SELECT first_name, last_name, role_id, manager_id FROM top5000 WHERE ?";
        //   connection.query(query, { artist: answer.artist }, function(err, res) {
        //     if (err) throw err;
        //     for (var i = 0; i < res.length; i++) {
        //       console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
        //     }
        //     runSearch();
        //   });
        // }));
    
  
     