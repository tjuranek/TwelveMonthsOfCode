require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes

app.listen(port, () => {
	console.log(`🚀 Server started on port ${port}`);
});

export { app };
