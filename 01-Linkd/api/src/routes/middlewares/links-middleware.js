import { connection } from '../../db/index.js';
import { generateKey } from '../../services/key-gen.js';

const createLink = (req, res) => {
	let key = generateKey();

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

export { createLink, getLinkById };
