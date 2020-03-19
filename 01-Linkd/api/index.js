import { openDatabaseConnection } from './src/db/index.js';

const init = async () => {
	await openDatabaseConnection();

	const app = import('./src/app.js').app;

	const server = app;
	const port = 3000;

	server.listen(port, () => {
		console.log(`🚀 Server started on port ${port}`);
	});
};

init();
