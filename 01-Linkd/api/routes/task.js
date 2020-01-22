import { Router } from 'express';
import { getTasks } from '../services/taskService';

const router = Router();

router.get('/task', getTasks());

export { router };
