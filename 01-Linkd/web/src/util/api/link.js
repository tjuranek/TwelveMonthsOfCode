import axios from 'axios';

const submitLink = async link => {
	const response = await axios.post('http://localhost:3001/link/create', {
		link: link
	});

	return response.status === 200 ? response.data : '';
};

export { submitLink };
