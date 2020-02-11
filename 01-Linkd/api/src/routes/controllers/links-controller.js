import express from 'express';
import { getLinkById, createLink } from '../middlewares/links-middleware.js';

const linkRouter = express.Router();

/* linkRouter.get('/key', (req, res) => {
	res.send('123abc');
}); */

linkRouter.get('/key', createLink);
linkRouter.get('/:id', getLinkById);

export { linkRouter };
