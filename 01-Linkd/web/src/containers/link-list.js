import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';

import { AppContext } from '../store';
import { LinkCard } from '../components';

const useStyles = createUseStyles({
	list: {
		border: '2px solid black',
	},
});

const LinkList = () => {
	const { appState, appDispatch } = useContext(AppContext);

	const classes = useStyles();

	return (
		<>
			{appState.links.length > 0 && (
				<div className={classes.list}>
					{appState.links.map((link) => (
						<LinkCard link={link} />
					))}
				</div>
			)}
		</>
	);
};

export { LinkList };
