const express = require('express');

const app = express();

app.use(express.json());

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

app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({ 
        evento: 'Semana Omnistack 11.0',
        aluno: 'Larissa Yopan'
    });
});

app.listen(3333);