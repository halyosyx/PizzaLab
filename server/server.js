const express = require('express');
const client = require('./db');
const router = express.Router();
const app = express();
const cors = require("cors");

/* == ROUTES == */
app.use(cors());
app.use(express.json());

//Generate random toppings

//Handles getting pizza sizes and price
app.get('/pizzasizes', async (req, res) => {    
    try {
        const pizzaSizes = await client.query("SELECT * FROM pizza_sizes");
        res.json(pizzaSizes.rows);
        
    } catch (err) {
        console.error(err);
    }
});

//Handles getting the toppings
app.get('/toppings', async (req, res) => {    
    try {
        const pizzaToppings = await client.query("SELECT * FROM toppings");
        res.json(pizzaToppings.rows);
        
    } catch (err) {
        console.error(err);
    }
});

//Handles getting the USERS
app.get('/user', async (req, res) => {    
    try {
        const user = await client.query("SELECT * FROM users");
        res.json(users.rows);
        
    } catch (err) {
        console.error(err);
    }
});

//Handles getting the ORDERS
app.get('/user', async (req, res) => {    
    try {
        const orders = await client.query("SELECT * FROM orders");
        res.json(orders.rows);
        
    } catch (err) {
        console.error(err);
    }
});




const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));