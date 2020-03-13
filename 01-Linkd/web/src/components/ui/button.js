import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	button: {
		backgroundColor: '#8FA9BF',
		border: '.25px solid #000000',
		borderRadius: '2rem',
		boxShadow: '0px 0px 0px 2px rgba(48, 48, 48, .2)',
		color: '#f5f5f5',
		fontSize: '1.25rem',
		fontWeight: 'bold',
		height: '3.5rem'
	}
});

const Button = ({ title }) => {
	const classes = useStyles();

	return (
		<button className={classes.button} type="button" value="submit">
			{title}
		</button>
	);
};

export { Button };
