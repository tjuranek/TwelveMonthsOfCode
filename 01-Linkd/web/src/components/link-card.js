import React from 'react';
import { createUseStyles } from 'react-jss';

import { Button } from './ui';

const useStyles = createUseStyles({
	card: {
		backgroundColor: '#ffffff',
		display: 'grid',
		gridTemplateColumns: '4fr 1fr',
		gridTemplateRows: '1fr',
		gridTemplateAreas: `
			'links buttons'
		`,
		padding: '1rem',
	},
	links: {
		alignItems: 'center',
		display: 'inline-grid',
		gridArea: 'links',
	},
	buttons: {
		alignItems: 'center',
		display: 'inline-grid',
		gridArea: 'buttons',
		justifyContent: 'center',
	},
});

const LinkCard = ({ link }) => {
	const classes = useStyles();

	return (
		<div className={classes.card}>
			<div className={classes.link}>
				<p>{link.link}</p>
				<p>{link.key}</p>
			</div>

			<div className={classes.buttons}>COPY/STATS</div>
		</div>
	);
};

export { LinkCard };
