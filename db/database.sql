CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
    id INT(11)NOT null auto_increment,
    name VARCHAR (45) DEFAULT NULL,
    salary INT(5) DEFAULT null,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO  employee VALUES
(1,'ROSA',1000),
(2,'MILTON',2000),
(3,'MARIANGEL',2500),
(4,'ANTHONY',1500),
(5,'NALA',1500);