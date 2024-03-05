const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const routerAPI = require('./server/router');


app.use(cors());
app.use(express.json());
routerAPI(app);

app.use('/', express.static(path.resolve(__dirname, 'client', 'home')));
app.use('/carrito', express.static(path.resolve(__dirname, 'client', 'carrito')));
app.use('/carrito/img', express.static(path.resolve(__dirname, 'client','home', 'img')));
app.use('/register', express.static(path.resolve(__dirname, 'client', 'register')));
app.use('/', express.static(path.resolve(__dirname, 'client', 'register')));

app.listen(3100, () =>{
    console.log('aplicacion corriendo en el puerto 3100');
});