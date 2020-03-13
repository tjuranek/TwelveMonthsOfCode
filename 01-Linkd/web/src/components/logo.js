import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	logo: {
		color: '#8FA9BF',
		fontSize: '4rem',
		fontWeight: 'bold',
		paddingBottom: '15px',
		textShadow:
			'-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
	}
});

const Logo = () => {
	const classes = useStyles();

	return <h1 className={classes.logo}>LINKD</h1>;
};

export { Logo };
