import mysql from 'mysql';

const connection = mysql.createConnection({
	driver: 'msnodesqlv8',
	server: process.env.DB_SERVER,
	port: process.env.DB_PORT,
	database: process.env.DB_NAME,
	options: {
		trustedConnection: true
	}
});

connection.connect(error => {
	if (error) throw error;
});

export const database = connection;
