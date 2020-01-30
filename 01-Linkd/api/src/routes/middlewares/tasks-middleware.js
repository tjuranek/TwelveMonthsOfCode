import { connection } from '../../db/index.js';

const getAllTasks = async (req, res) => {
	const tasks = await connection.query('select * from Links');
	res.send(tasks);
};

export { getAllTasks };
