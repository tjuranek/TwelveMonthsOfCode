import shortid from 'shortid';

const generateKey = function() {
	return shortid.generate();
};

export { generateKey };
