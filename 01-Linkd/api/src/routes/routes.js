import express from 'express';
import { taskRouter } from './controllers/tasks-controller.js';

const router = express.Router();

router.use('/task', taskRouter);

export { router };
