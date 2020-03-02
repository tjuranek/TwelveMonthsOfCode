import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	logo: {
		color: 'blue'
	}
});

const Logo = () => {
	const classes = useStyles();

	return <h1 className={classes.logo}>LINKD</h1>;
};

export { Logo };
