import express from 'express';
import {
	createLink,
	getLink,
	deleteLink
} from '../controllers/link-controller.js';

const linkRouter = express.Router();

linkRouter.post('/link/create', createLink);
linkRouter.get('/:key', getLink);
linkRouter.put('/link/delete/:key', deleteLink);

export { linkRouter };
