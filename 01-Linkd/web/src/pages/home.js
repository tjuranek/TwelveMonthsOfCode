import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	header: {
		color: 'green'
	}
});

function Home() {
	const classes = useStyles();

	return (
		<>
			<h1 className={classes.header}>Home</h1>
		</>
	);
}

export default Home;
