import { connection } from '../db/database.js';

function getTasks() {
	return connection.query('select * from tasks');
}

export { getTasks };
