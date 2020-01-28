import express from 'express';
import { getAllTasks } from '../middlewares/tasks-middleware.js';

const taskRouter = express.Router();

taskRouter.get('/all', getAllTasks);

export { taskRouter };
