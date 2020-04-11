import axios from 'axios';

const getLink = async (key) => {
	const response = await axios.get(`http://localhost:3001/link/get/${key}`);

	return response.status === 200 ? response.data : '';
};

const submitLink = async (link) => {
	const response = await axios.post('http://localhost:3001/link/create', {
		link: link,
	});

	return response.status === 200 ? response.data : '';
};

export { getLink, submitLink };
