const express = require('express');
const path = require('path');

const config = require('../config/config.json');
const books = require('../data/books.json');
const audio = require('../data/audio.json');
const slider = require('../data/slider.config.json');

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../dist/index.html')));
app.get('/books', (req, res) => res.json(books));
app.get('/audio', (req, res) => res.json(audio));
app.get('/slider', (req, res) => res.json(slider));

app.listen(config.port, () => {
	global.console
		.log(`Application ${config.name} is running on http://${config.host}:${config.port}.`);
});
