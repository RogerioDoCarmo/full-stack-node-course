import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import Database from './database';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(cors());

/**
 * Creating database
 */
let database = new Database();


app.post("/add", (request, response) => {
    
    const {data, horario, evento, descricao} = request.body;  
    database.add(data, {horario, evento, descricao});

    response.send({
        success: true,
    })

});

app.post("/get/:year/:month/:day", (request, response) => {

    const { year, month, day } = request.params;
    const data = database.get(`${year}/${month}/${day}`);

    response.send(JSON.stringify(data));
})

const port = 10000;
app.listen(port, () => {
    console.log('====== Minicurso Server ======');
    console.log(`Running in port ${port}`);
});