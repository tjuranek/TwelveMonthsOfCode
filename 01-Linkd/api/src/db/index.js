import mongodb from 'mongodb';

const uri =
	'mongodb+srv://tjuranek:Tho41303!@linkd-9aevg.mongodb.net/Linkd?retryWrites=true&w=majority';
const client = new mongodb.MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
	const collection = client.db('Linkd').collection('Links');

	//console.log(collection);
	// perform actions on the collection object
	collection.find({}).toArray(function(err, docs) {
		//assert.equal(err, null);
		console.log('Found the following records');
		console.log(docs);
		//callback(docs);
	});

	client.close();
});

let db = 0;
const openDbConnection = () => {};
const closeDbConnection = () => {};

/* let db;

const uri = 'mongodb+srv://tjuranek:Tho41303!@linkd-9aevg.mongodb.net/Linkd';

const client = new mongodb.MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const openDbConnection = () => {
	console.log('here');

	client.connect(err => {
		if (err) throw err;
		console.log(client);
		db = client.db('test');
	});
	console.log(db);
	console.log(client);
};

const closeDbConnection = () => {
	client.close();
}; */

export { db, openDbConnection, closeDbConnection };
