import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	footer: {
		color: '#f5f5f5',
		fontSize: '1.25rem',
		paddingTop: '15px',
		textShadow:
			'-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
	}
});

const Footer = () => {
	const classes = useStyles();

	return <p className={classes.footer}>Created by Thomas Juranek</p>;
};

export { Footer };
