import React from 'react';
import { createUseStyles } from 'react-jss';

import { LinkCard } from '../components';

const useStyles = createUseStyles({
	list: {
		border: '2px solid black',
	},
});

const LinkList = ({ links }) => {
	const classes = useStyles();

	return (
		<div className={classes.list}>
			{links.map((link) => (
				<LinkCard link={link} />
			))}
		</div>
	);
};

export { LinkList };
