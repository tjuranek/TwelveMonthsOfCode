import express from 'express';
import bodyParser from 'body-parser';

import { router } from './routes/router.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', router);

export { app };
