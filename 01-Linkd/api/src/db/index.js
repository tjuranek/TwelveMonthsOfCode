import mongodb from 'mongodb';

//TODO: change this to be an env var
const databaseName = 'Linkd';
const connectionString =
	'mongodb+srv://tjuranek:Tho41303!@linkd-9aevg.mongodb.net';

const client = new mongodb.MongoClient(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

let database;

const openDatabaseConnection = async () => {
	const { error } = await client.connect();

	if (error) throw error;

	database = client.db(databaseName);
};

const closeDatabaseConnection = () => {
	client.close();
};

export { database, openDatabaseConnection, closeDatabaseConnection };
