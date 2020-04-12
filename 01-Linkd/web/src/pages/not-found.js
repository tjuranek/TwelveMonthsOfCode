import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({});

const NotFound = () => {
	const classes = useStyles();

	return <h1>404 Not Found</h1>;
};

export { NotFound };
