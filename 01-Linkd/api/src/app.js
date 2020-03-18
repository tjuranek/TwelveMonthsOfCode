import bodyParser from 'body-parser';
import express from 'express';

import { openDbConnection } from './db/index.js';
import { router } from './routes/router.js';

openDbConnection();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', router);

export { app };
