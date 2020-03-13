import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	input: {
		backgroundColor: '#f5f5f5',
		border: '.25px solid #303030',
		borderRadius: '.25rem',
		boxShadow: '0px 0px 0px 2px rgba(48, 48, 48, .2)',
		fontSize: '1rem',
		height: '3.5rem',
		paddingLeft: '15px'
	}
});

const Input = ({ placeholder }) => {
	const classes = useStyles();

	return (
		<input
			className={classes.input}
			type="text"
			placeholder={placeholder}
		/>
	);
};

export { Input };
