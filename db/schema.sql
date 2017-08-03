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