import React from 'react';
import { createUseStyles } from 'react-jss';

import { Logo, Footer, LinkCard } from '../components';
import { ShortenLinkForm } from '../containers/shorten-link-form';
import Background from '../res/images/background.jpg';

const useStyles = createUseStyles({
	page: {
		backgroundImage: `url(${Background})`,
		backgroundSize: 'cover',
		display: 'grid',
		gridTemplateRows: '1fr 2fr 1fr',
		gridTemplateColumns: '1fr 2fr 1fr',
		gridTemplateAreas: `
			'. . .'
			'. content .'
			'. . .'
		`,
		height: '100vh',
		width: '100vw',
	},
	content: {
		alignSelf: 'center',
		gridArea: 'content',
	},
});

const Home = () => {
	const classes = useStyles();

	return (
		<div className={classes.page}>
			<div className={classes.content}>
				<Logo />

				<ShortenLinkForm />

				<LinkCard link="test.com" />

				<Footer />
			</div>
		</div>
	);
};

export { Home };
