const DEBUG = true;

var mysql = require("mysql");

var inquirer = require("inquirer");

function log(message) {
    if (DEBUG) {
        console.log(message);
    }
}

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "AFSD1843",
    database: "bamazon"
});

function openConnection() {
    connection.connect(function(err) {
        if(err) throw err;
        readProducts();
        console.log("connected as id " + connection.threadId);
    });
};

function closeConnection() {
    connection.end(function(err) {
        if(err) throw err;
        console.log("closed connection");
    });
};

var questions = [
    {
        type: 'input',
        name: 'item_id',
        message: "Please enter the item ID for the product you want to buy."
    },
    {
        type: 'input',
        name: 'item_quantity',
        message: "How many would you like to buy?"
    }
];

function readProducts() {
    connection.query(
        "SELECT * FROM products",
        function(err, result)  {
            if(err) throw err;
            for (x of result) {
                console.log(    "ID: "      + x.item_id + 
                                " Name: "   + x.product_name +
                                " Price: "  + x.price + "\n");
            }
            promptUser();
            // log(theList);
        }
    );
}

function updateProduct(quantity, id) {

    connection.query(
        "UPDATE products SET stock_quantity = ? WHERE item_id = ?",
        [quantity, id],
        function(err, res) {
            // log(quantity);
            // log(id);
            // log(err);
            if(err) throw err;
            closeConnection();
        }
    )
}

openConnection();

function promptUser() {
    inquirer
    .prompt(questions).then(answers => {
        // console.log(JSON.stringify(answers, null, '  '));
        log(answers.item_id);
        log(answers.item_quantity);
        connection.query(
            "SELECT * FROM products WHERE item_id = ?",
            [answers.item_id],
            function(err, result) {
                if(err) throw err;
                // log(result[0].stock_quantity);
                if (answers.item_quantity > result[0].stock_quantity) {
                    log("Insufficient Quantity!");
                    closeConnection();
                } else {
                    var newQuantity = result[0].stock_quantity - answers.item_quantity;
                    updateProduct(newQuantity, answers.item_id);
                }
            }
        );
    })

}
