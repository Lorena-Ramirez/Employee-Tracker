USE employees_DB;

INSERT INTO department (name)
VALUES ("sales"),
("engineering"),
("legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead",100000,1),
("Salesperson",80000,1),
("Lead Engineer",150000,2),
("Software Engineer",120000,2),
("Legal Team Lead",250000,3),
("Lawyer",190000,3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Leanna", "Smith", 1, null),
 ("John", "Doe", 2 , 1),
 ("Julia", "Baker", 3, null),
 ("Matt", "Reynolds", 4, 3),
 ("Tina", "Bay", 5, null),
 ("Ryan", "Paynter", 6, 5);
