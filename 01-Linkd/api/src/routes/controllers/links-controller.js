import express from 'express';
import {
	generateLink,
	getLinkById,
	deleteLink
} from '../middlewares/links-middleware.js';

const linkRouter = express.Router();

linkRouter.get('/:id', getLinkById);
linkRouter.post('', generateLink);
linkRouter.put('/update', deleteLink);

export { linkRouter };
