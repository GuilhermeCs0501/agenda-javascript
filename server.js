require('node:dns').setServers(['1.1.1.1', '8.8.8.8']);

require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const session = require('express-session');
const MongoStore = require('connect-mongo').default;
const flash = require('connect-flash');


const path = require('path');
const routes = require('./routes');
const helmet = require ('helmet');
const csrf = require('csurf');
const { middlewareGlobal, checkCsrfError , csrfMiddleware} = require('./src/middlewares/middleware');


app.use(helmet());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'frontend')));

const sessionOptions = session({
    secret: 'abc',
    store: MongoStore.create({
        mongoUrl: process.env.CONNECTIONSTRING
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());


app.use(middlewareGlobal);
app.use(csrfMiddleware);
app.use(routes);
app.use(checkCsrfError);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
});



mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conectei a base de dados.');
        app.emit('pronto');
    })
    .catch(e => {
        console.log('ERRO AO CONECTAR NO MONGO');
        console.log(e);
    });





//          Criar   Ler   Atualizar Apagar
// CRUD  -> CREATE, READ, UPDATE, DELETE
//          Post    Get    Put     Delete
// http://meusite.com/ <- GET -> Entregue a pagina/


//http://facebool.com/users/profiles/12345?campanha=googleads  Query String
