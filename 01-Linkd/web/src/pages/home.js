import React from 'react';
import { createUseStyles } from 'react-jss';

import { Logo } from '../components/logo';
import { SingleInputForm } from '../components/single-input-form';
import { Footer } from '../components/footer';

const useStyles = createUseStyles({
	grid: {
		display: 'grid',
		gridTemplateRows: '1fr 2fr 1fr',
		gridTemplateColumns: '1fr 2fr 1fr',
		gridTemplateAreas: `
			'. . .'
			'. content .'
			'. . .'
		`,
		height: '100vh',
		width: '100vw'
	},
	content: {
		backgroundColor: 'red',
		gridArea: 'content'
	}
});

const Home = () => {
	const classes = useStyles();

	return (
		<div className={classes.grid}>
			<div class="content" className={classes.content}>
				<Logo />
				<SingleInputForm />
				<Footer />
			</div>
		</div>
	);
};

export { Home };
