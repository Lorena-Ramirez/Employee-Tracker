DROP DATABASE IF EXISTS employeesDB;
CREATE database employeesDB;

USE employeesDB;

CREATE TABLE department(
    id INT PRIMARY KEY NOT NULL,
    name VARCHAR(30) NULL
);

CREATE TABLE role(
    id INT PRIMARY KEY NOT NULL,
    title VARCHAR(30) NULL,
    salary DECIMAL NULL,
    department_id INT NULL 
);

CREATE TABLE employee(
    id - INT PRIMARY KEY NULL,
    first_name VARCHAR(30) NULL, 
    last_name VARCHAR(30) NULL, 
    role_id INT NULL, 
    manager_id INT NULL
);

