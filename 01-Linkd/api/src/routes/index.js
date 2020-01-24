import express from 'express';
const router = express.Router();

router.get('/task', function(req, res) {
	res.send('okie');
});

export { router };
