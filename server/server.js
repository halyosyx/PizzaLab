const express = require('express');
const client = require('./db');
const router = express.Router();
const app = express();
const cors = require("cors");
const { default: axios } = require('axios');

/* == ROUTES == */
app.use(cors());
app.use(express.json());

//Generate random toppings

//Handles getting pizza sizes and price



app.get('/selectedToppings', async (req, res) => {
    try {
        const selectedPizzas = await client.query("SELECT * FROM toppings_selected JOIN toppings ON toppings_selected.toppings_id = toppings.id");
        res.json(selectedPizzas);
    } catch (err) {
        console.log(err);
    }
})

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
app.get('/users', async (req, res) => {    
    try {
        const users = await client.query("SELECT * FROM users");
        res.json(users.rows);
        
    } catch (err) {
        console.error(err);
    }
});

//Handles getting ONE User
app.get('/user/:id', async (req, res) => {
    console.log(req.params);    
    try {
        const users = await client.query("SELECT * FROM users WHERE id = $1", [req.params.id]);
        res.json(users.rows);
        
    } catch (err) {
        console.error(err);
    }
});


//Handles POST new USER
app.post('/users', async (req, res) => {    
    try {
        const newUser = await client.query(
            "INSERT INTO users (name, email, phone, created_on) VALUES ($1, $2, $3, 'now') RETURNING *;",
            [req.body.name, req.body.email, req.body.phone]
        );
        res.json(newUser.rows[0]);

    } catch (err) {
        console.error(err);
    }
});


//Handles getting the ORDERS
app.get('/orders', async (req, res) => {    
    try {
        const orders = await client.query("SELECT * FROM orders");
        res.json(orders.rows);
        
    } catch (err) {
        console.error(err);
    }
});


// POST NEW Order
// app.post('/order', async (req, res) => {
//     console.log(req.params);  
//     try {
//         const newOrder = await client.query(
//             "INSERT INTO users (name, email, phone, created_on) VALUES ($1, $2, $3, 'now') RETURNING id AS user_id;",
//             [req.body.name, req.body.email, req.body.phone],
//             "INSERT INTO orders (user_id, total, order_created) VALUES (user_id, $1, 'now') RETURNING id AS order_id;",
//             [req.body.total]
//         );
//         res.json(newOrder.rows);
//         console.log(newOrder);
//     } catch (err) {
//         console.error(err);
//     }
// });
// Array of objects
// https://stackoverflow.com/questions/54338475/function-inserting-json-array-elements-into-a-table

//Multiple inserts
// https://dba.stackexchange.com/questions/139950/insert-into-multiple-tables-with-one-query
// And
// https://dbfiddle.uk/?rdbms=postgres_13&fiddle=0bdbcab0a30981590562153f91567f92


//Handles getting the ONE Order
app.get('/order/:id', async (req, res) => {    
    console.log(req.params);  

    try {
        const orders = await client.query("SELECT * FROM orders");
        res.json(orders.rows);
        
    } catch (err) {
        console.error(err);
    }
});


app.post('/order', async (req, res) => {
    console.log(req.params);  
    try {
        const newUser = await client.query(
            "INSERT INTO users (name, email, phone, created_on) VALUES ($1, $2, $3, 'now') RETURNING id AS user_id;",
            [req.body.name, req.body.email, req.body.phone]
        );
        const userId = newUser.rows[0].user_id
        const newOrder = await client.query(
            "INSERT INTO orders (user_id, total, order_created) VALUES ($1, $2, 'now') RETURNING id AS order_id;",
        [userId, req.body.total]
        );
        const orderId = newOrder.rows[0].order_id
        for ( const pizza of req.body.pizzas ) { 
            const newPizza = await client.query(
                "INSERT INTO ordered_items (orders_id) VALUES ($1) RETURNING id AS pizza_id;",
                [orderId]
            );
            const toppings = pizza.toppings_selected_id
            const pizzaId = newPizza.rows[0].pizza_id
            for (const toppingId of toppings) {
                await client.query(
                    "INSERT INTO toppings_selected (toppings_id, ordered_items_id) VALUES ($1, $2);",
                    [toppingId, pizzaId]
                );
            }

        }  
        res.json(newOrder.rows[0].order_id);
        console.log(newOrder.rows[0]);
    } catch (err) {
        console.error(err);
    }
});




const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


// Pizzas.forEach(pizza => {
//     axios.put("url...", {pizza}).then((response) => {})
// }) 




