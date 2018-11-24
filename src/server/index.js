const Bundler = require('parcel-bundler');
const path = require('path');
const express = require('express');
const env = require('node-env-file');
const { setupDatabaseEnviroment } = require('./database');

let app = express();


const bundler = new Bundler('./src/index.html', {
	outDir: '../dist',
});

console.log(`Loading .env file...`);
env('./.env');

console.log('Establishing pool connection to Postgres...');
const db = setupDatabaseEnviroment();
db.query('SELECT NOW()', [], (err, res) => {
	console.log(err, res);
});

app.use(express.static(__dirname + '../../../dist'));

if (process.env.NODE_ENV !== 'production') {
	app.use(bundler.middleware());
}

// Wrap all requests to index.html.
app.get('*', function(req, res){
	res.sendFile(path.resolve(__dirname + '../../../dist/index.html'));
});

app.listen(process.env.PORT, process.env.HOST, () => {
	console.log(`Listening on http://${process.env.HOST}:${process.env.PORT}`);
});
