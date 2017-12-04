const express = require('express');
const path = require('path');

const config = require('../config/config.json'); 
const users = require('../data/users.json');

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../dist/index.html')));
app.get('/users', (req, res) => res.json(users));
app.get('*', (req, res) => res.status(404).send('Page not found :('))

app.listen(config.port, () => {
    console.log(`Application ${config.name} is up and running on http://${config.host}:${config.port}.`);
});