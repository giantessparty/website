const Bundler = require('parcel-bundler');
const path = require('path');
const express = require('express');
const env = require('node-env-file');

let app = express();


const bundler = new Bundler('./src/index.html', {
	outDir: '../dist',
});

console.log(`Loading .env file...`);
env('./.env');

app.use(express.static(__dirname + '../dist'));
app.use(bundler.middleware());

// Wrap all requests to index.html.
app.get('*', function(req, res){
	res.sendFile('index.html');
});

app.listen(process.env.PORT, process.env.HOST, () => {
	console.log(`Listening on http://${process.env.HOST}:${process.env.PORT}`);
});
