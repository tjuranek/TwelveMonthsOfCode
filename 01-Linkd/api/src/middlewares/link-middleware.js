import express from 'express';

import {
	createLink,
	getLink,
	deleteLink,
} from '../controllers/link-controller.js';

const linkRouter = express.Router();

linkRouter.post('/create', createLink);
linkRouter.get('/get/:key', getLink);
linkRouter.put('/delete/:key', deleteLink);

export { linkRouter };
