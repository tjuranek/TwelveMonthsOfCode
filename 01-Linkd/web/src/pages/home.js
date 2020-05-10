import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';

import { Logo, Footer } from '../components';
import { LinkList, ShortenLinkForm } from '../containers';
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

				<LinkList />

				<Footer />
			</div>
		</div>
	);
};

export { Home };
