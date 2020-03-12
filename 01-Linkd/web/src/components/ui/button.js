import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	button: {
		backgroundColor: 'blue'
	}
});

const Button = () => {
	const classes = useStyles();

	return <button className={classes.button} type="button"></button>;
};

export { Button };
