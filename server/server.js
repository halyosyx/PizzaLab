const express = require('express');
const router = express.Router();
const app = express();

/* == ROUTES == */


//Handles back end server for data
app.get('/users', (req, res) => {
    const users = [
        {id: 1, firstName: 'David', lastName: 'Lam'},
        {id: 2, firstName: 'Dylan', lastName: 'Smith'},
        {id: 3, firstName: 'Joe', lastName: 'Johnson'},
    ];

    res.json(users);

});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));