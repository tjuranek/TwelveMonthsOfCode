import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import { router } from './routes/router.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/html' }));

app.use(cors());

app.use('/', router);

export { app };
