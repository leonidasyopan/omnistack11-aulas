const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);










/**
* Rota & /recurso
*/

/**
 *  Método HTTP:
 * 
 * GET: Buscar/listar uma informação do Back-end
 * POST: Criar uma informação no Back-end
 * PUT: Alterar uma informação no Back-end
 * DELETE: Deletar uma informação no Back-end
 */

/**
 * Tipos de parametro
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (ex.: Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */


/**
 * Bancos de Dados
 * 
 * SQL: MySQL, SQLite, Postgres, ORACLE, Microsoft SQL Server
 * NOSQL: MongoDB, CouchDB, 
 */

/**
 * Driver: SELECT * FROM users;
 * Query Builder: table('users).select('*').where('');
 */

