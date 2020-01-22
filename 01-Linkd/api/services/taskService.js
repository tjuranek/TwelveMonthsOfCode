import { connection } from '../db';

function getTasks() {
	return connection.query('select * from tasks');
}

export { getTasks };
