import express from 'express';

import { linkRouter } from '../middlewares/link-middleware.js';

const router = express.Router();

router.use('/link', linkRouter);

export { router };
