const router = require('express').Router();
import get from '../services/taskService';

router.get('/task', get);

module.exports = router;
// get service
