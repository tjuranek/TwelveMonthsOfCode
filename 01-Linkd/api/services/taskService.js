import database from '../db';

function getTasks() {
	return database.query('select * from tasks');
}

export const get = getTasks();
