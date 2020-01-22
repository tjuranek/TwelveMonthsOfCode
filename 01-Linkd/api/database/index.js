import mysql from 'mysql';

const connection = mysql.createConnection({
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

export { connection };
