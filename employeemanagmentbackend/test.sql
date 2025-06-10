-- Create the 'veera' database
CREATE DATABASE IF NOT EXISTS veera;

-- Use the 'veera' database
USE veera;

-- Create the 'employee' table
CREATE TABLE IF NOT EXISTS employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255)
); 

INSERT INTO employee (first_name, last_name, email)
VALUES ('John', 'Doe', 'john.doe@example.com');
