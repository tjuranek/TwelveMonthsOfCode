import bodyParser from 'body-parser';
import express from 'express';

import { router } from './routes/router.js';

import { database } from './db/index.js';

console.log('heres app');
console.log(database);

/* database
	.collection('Links')
	.find({})
	.toArray(function(err, docs) {
		//assert.equal(err, null);
		console.log('Found the following records');
		console.log(docs);
		//callback(docs); 
	}); */

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', router);

export { app };
