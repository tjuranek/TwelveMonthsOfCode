import express from 'express';
import { taskRouter } from './controllers/tasks-controller.js';
import { linkRouter } from './controllers/links-controller.js';

const router = express.Router();

router.use('/task', taskRouter);
router.use('/', linkRouter);
export { router };
