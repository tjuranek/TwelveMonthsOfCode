import { database } from '../db/index.js';
import { generateKey } from '../util/key-gen.js';

const createLink = async (req, res) => {
	try {
		const key = generateKey();
		const link = req.body.link;
		const creationDate = new Date()
			.toISOString()
			.slice(0, 19)
			.replace('T', ' ');

		const { error, result } = await database.collection('Links').insert({
			key: key,
			link: link,
			creationDate: creationDate,
			isDeleted: false
		});

		if (error) throw error;
		console.log(result);

		res.json(key);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
};

const getLink = async (req, res) => {
	try {
		const { key } = req.params;
		if (!key) throw 'Key is required to get record.';

		const response = await database.collection('Links').findOne({
			key: key
		});

		if (!response) throw `A record with the key of ${key} was not found.`;

		res.json(response.link);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
};

const deleteLink = async (req, res) => {
	try {
		const { key } = req.params;
		if (!key) throw 'Key is a required to delete record.';

		const { error, result } = await database.collection('Links').updateOne(
			{
				key: key
			},
			{
				$set: { isDeleted: true }
			}
		);

		if (error) throw error;
		console.log(result);

		res.sendStatus(200);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
};

export { createLink, getLink, deleteLink };
