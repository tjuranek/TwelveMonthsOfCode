const router = require('express').Router();

const task = require('./task');

router.use('/task', taskRouter);

export default router;
