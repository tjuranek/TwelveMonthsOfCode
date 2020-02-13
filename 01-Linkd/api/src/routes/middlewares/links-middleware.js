import { connection } from '../../db/index.js';
import { generateKey } from '../../services/key-gen.js';

const generateLink = async (req, res) => {
	try {
		const key = generateKey();
		const link = req.body.link;
		const creationDate = new Date()
			.toISOString()
			.slice(0, 19)
			.replace('T', ' ');

		const result = await connection.query(
			`INSERT INTO Links ([Key], [Link], [CreationDate]) VALUES ('${key}', '${link}', '${creationDate}')`
		);

		res.sendStatus(200);
	} catch (err) {
		throw err;
	}
};

const createLink = (req, res) => {
	let key = generateKey();

	console.log('Your key is: ' + key);

	res.send(key);
};

const getLinkById = async (req, res) => {
	try {
		const { id } = req.params;
		if (!id) throw 'Id is required';

		const link = await connection.query(
			`select * from Links where Id = ${id}`
		);

		res.json(link.recordset);
	} catch (err) {
		throw err;
	}
};

const deleteLink = async (req, res) => {
	// UPDATE LINKS SET IsDeleted = 1 WHERE [Key] = 'x8qTe38iE'

	try {
		const key = req.body.key;
		if (!key) throw 'Key is a required parameter';

		const result = await connection.query(
			`UPDATE LINKS SET IsDeleted = 1 WHERE [Key] = '${key}'`
		);

		res.sendStatus(200);
	} catch (err) {
		throw err;
	}
};

export { generateLink, createLink, getLinkById, deleteLink };
