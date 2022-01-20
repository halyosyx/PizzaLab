const pg = require('pg');
const client = new pg.Client("postgres://mojuvkww:BI-O9Pt30x3E4Wfp_44MWZR4siZi8mnh@kashin.db.elephantsql.com/mojuvkww");

client.connect(function(err) {
    if(err) {
        return console.error("could not connect to postgress", err);
    }
})

module.exports = client;


// const { Pool } = require('pg');

// const pool = new Pool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME
// });

// module.exports = pool;

