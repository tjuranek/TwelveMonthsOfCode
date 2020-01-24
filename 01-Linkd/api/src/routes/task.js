import express from 'express';

import { getTasks } from '../services/taskService.js';

const router = express.Router();

router.get('/task', function(req, res) {
	var tasks = getTasks();
	res.send(tasks);
});

export { router as taskRouter };
