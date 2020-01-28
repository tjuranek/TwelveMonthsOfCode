import { connection } from '../../db/index.js';

const getAllTasks = async (req, res) => {
	let tasks;

	var a = connection.query('select * from tasks');

	connection.query('SELECT * FROM Tasks', (err, rows) => {
		tasks = rows;
	});

	res.send(tasks);
};

export { getAllTasks };
