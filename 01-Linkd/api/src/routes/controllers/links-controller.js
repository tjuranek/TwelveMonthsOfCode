import express from 'express';
import { getLinkById, createLink } from '../middlewares/links-middleware.js';

const linkRouter = express.Router();

linkRouter.get('/:id', getLinkById);
linkRouter.get('key', createLink);

export { linkRouter };
