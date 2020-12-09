DROP DATABASE IF EXISTS employeesDB;
CREATE database employeesDB;

USE employeesDB;

CREATE TABLE department(
    id INT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role(
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT 
);

CREATE TABLE employee();

