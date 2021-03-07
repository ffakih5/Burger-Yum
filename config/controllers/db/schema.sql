DROP DATABASE IF EXISTS burgers_db;

USE burgers_db; 


id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	sleepy BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
