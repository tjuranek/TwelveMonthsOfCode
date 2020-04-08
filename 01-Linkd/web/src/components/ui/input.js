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

const Input = ({ onChange, placeholder, value }) => {
	const classes = useStyles();

	return (
		<input
			className={classes.input}
			onChange={event => onChange(event.target.value)}
			placeholder={placeholder}
			type="text"
			value={value}
		/>
	);
};

export { Input };
