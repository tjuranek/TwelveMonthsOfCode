import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	input: {
		border: '1px solid green'
	}
});

const Input = () => {
	const classes = useStyles();

	return <input className={classes.input} type="text" />;
};

export { Input };
