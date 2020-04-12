import axios from 'axios';

const siteUrl = process.env.REACT_APP_SITE_URL;

const getLink = async (key) => {
	const response = await axios.get(`${siteUrl}/link/get/${key}`);

	return response.status === 200 ? response.data : '';
};

const submitLink = async (link) => {
	const response = await axios.post(`${siteUrl}/link/create`, {
		link: link,
	});

	return response.status === 200 ? response.data : '';
};

export { getLink, submitLink };
