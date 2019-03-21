The following SQL is used in this assignment to set up the database.

Create database
---------------
DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

Set up table
------------
USE bamazon;

CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(255) NULL,
    department_name VARCHAR(255) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);

Insert initial data
-------------------
USE bamazon;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Switch", "Electronics", 299.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Home Gym", "Sports Equipment", 169.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hooded Jacket ", "Clothing", 89.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Drone", "Electronics", 194.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Electric Screwdriver", "Hardware", 13.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Double Dresser", "Furniture", 139.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nespresso Essenza", "Kitchen", 125.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Meat Thermometer", "Kitchen", 5.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Whey Protein", "Supplements", 29.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dash Cam", "Electronics", 57.99, 10);

List everything in the table
----------------------------
USE bamazon;

SELECT * FROM products;