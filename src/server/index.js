import http from 'http';
import path from 'path';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import connectDb from './db';
import middleware from './middleware';
import api from './api';
import config from './config.json';

let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));

app.use(express.static(path.join(__dirname,'../public')));

// connect to db
connectDb(db => {

	// internal middleware
	app.use(middleware({ config, db }));

	// api router
	app.use('/api', api({ config, db }));

	app.server.listen(process.env.PORT || config.port, () => {
		console.log(`Started App on port ${app.server.address().port}`);
	});	
});

export default app;