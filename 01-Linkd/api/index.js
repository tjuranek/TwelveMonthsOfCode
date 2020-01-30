import { app } from './src/app.js';

const server = app;
const port = 3000;

server.listen(port, () => {
	console.log(`🚀 Server started on port ${port}`);
});
