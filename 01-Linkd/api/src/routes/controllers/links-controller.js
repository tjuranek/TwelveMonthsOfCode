import express from 'express';
import { getLinkById } from '../middlewares/links-middleware.js';

const linkRouter = express.Router();

linkRouter.get('/:id', getLinkById);

export { linkRouter };
