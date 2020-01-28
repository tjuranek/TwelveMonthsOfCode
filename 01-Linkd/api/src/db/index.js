import mysql from 'mysql';
import msnodesqlv8 from 'msnodesqlv8';

const connection = mysql.createConnection({
	driver: 'msnodesqlv8',
	server: 'localhost',
	port: 1433,
	database: 'mydb',
	options: {
		trustedConnection: true
	}
});

export { connection };
