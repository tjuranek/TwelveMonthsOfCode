import express from 'express';
import { linkRouter } from './controllers/links-controller.js';

const router = express.Router();

router.use('/', linkRouter);
export { router };
