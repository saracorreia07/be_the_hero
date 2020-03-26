const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

/**
 *  Path / Resources
 */

/**
 *  HTTP Methods:
 */

/**
 *  GET: get/list backend informations
 *  POST: create information in the backend
 *  PUT: Update an information in the backend 
 *  DELETE: delete an information in the backend
 */

/**
 * Parameters's types
 * 
 * Query Params: nominated parameteres sent on the path after "?" (filters, paginations)
 * Route Params: parameters used to identify resources
 * Request Body: request's body, used to create or update resources
 */

/**
 * SQL: mySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where();
 */


app.listen(3333);