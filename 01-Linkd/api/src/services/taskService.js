import { connection } from '../database/database';

function getTasks() {
	return connection.query('select * from tasks');
}

export { getTasks };
