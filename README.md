# ecommerce

## Description

This is the backend for an e-commerce site. It was built using express.js, sequelize and mysql. The goal was to give a retail internet company and website that would allow it to stay competitive in the market place. 
This is the success requirements for the site.
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELEsTE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

## Table of Contents
*[Description](#description)
*[Installation](#installation)
*[Useage](#useage)
*[Credits](#credits)
*[license](#license)

## Installation
You’ll need to use the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect your Express.js API to a MySQL database and the [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables to store sensitive data, like your MySQL username, password, and database name.

Use the `schema.sql` file in the `db` folder to create your database using MySQL shell commands. Use environment variables to store sensitive data, like your MySQL username, password, and database name.

## Useage
The site repository is at https://github.com/sandy-06/e-commerce
The video link of it being demo'd is
![alt text]()