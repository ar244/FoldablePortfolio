### Schema

CREATE DATABASE portfolio_db;
USE portfolio_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	firstName varchar(255) NOT NULL,
	lastName varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

ALTER TABLE users add 
	(elevator VARCHAR(255) NOT NULL, 
	webAddress VARCHAR(100) NOT NULL, 
	email VARCHAR(50) NOT NULL,
	address VARCHAR(50) NOT NULL);
    
ALTER TABLE users add 
	(education1 VARCHAR(255) NOT NULL, 
	education2 VARCHAR(255) NOT NULL, 
	education3 VARCHAR(255) NOT NULL);

ALTER TABLE users add skills VARCHAR(255) NOT NULL;

ALTER TABLE users add 
	(exp1 VARCHAR(255) NOT NULL, exp1desc VARCHAR(255) NOT NULL,  
	exp2 VARCHAR(255) NOT NULL, exp2desc VARCHAR(255) NOT NULL,
	exp3 VARCHAR(255) NOT NULL, exp3desc VARCHAR(255) NOT NULL);
    
ALTER TABLE users add 
	(proj1 VARCHAR(255) NOT NULL, proj1desc VARCHAR(255) NOT NULL,  
	proj2 VARCHAR(255) NOT NULL, proj2desc VARCHAR(255) NOT NULL,
	proj3 VARCHAR(255) NOT NULL, proj3desc VARCHAR(255) NOT NULL);

