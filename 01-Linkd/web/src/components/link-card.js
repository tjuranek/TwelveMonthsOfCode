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
	primaryLink: {
		fontSize: '1.15rem',
		fontWeight: 'bold',
		paddingBottom: '.25rem',
	},
	secondaryLink: {
		color: 'darkgray',
		fontSize: '0.7rem',
		paddingTop: '.25rem',
	},
});

const LinkCard = ({ link }) => {
	const classes = useStyles();

	return (
		<div className={classes.card}>
			<div className={classes.link}>
				<p className={classes.primaryLink}>{link.link}</p>
				<p className={classes.secondaryLink}>
					linkd.thomasjuranek.com/{link.key}
				</p>
			</div>

			<div className={classes.buttons}>COPY/STATS</div>
		</div>
	);
};

export { LinkCard };
