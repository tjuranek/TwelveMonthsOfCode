import { generateKey } from '../util/key-gen.js';

const createLink = async (req, res) => {
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

const getLink = async (req, res) => {
	try {
		const { key } = req.params;
		if (!key) throw 'Id is required';

		const link = await connection.query(
			`select * from Links where [Key] = '${key}'`
		);

		res.json(link.recordset);
	} catch (err) {
		throw err;
	}
};

const deleteLink = async (req, res) => {
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

export { createLink, getLink, deleteLink };
