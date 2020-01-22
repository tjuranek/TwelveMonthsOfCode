import { Router } from 'express';
import { getTasks } from '../services/taskService';

const router = Router();

router.get('/task', function(req, res) {
	res.send(getTasks);
});

export { router };
