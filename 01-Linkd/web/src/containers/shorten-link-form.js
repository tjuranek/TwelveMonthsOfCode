import React from 'react';
import { createUseStyles } from 'react-jss';

import { Button, Input } from '../components/ui/ui';

const useStyles = createUseStyles({
	layout: {
		display: 'grid',
		gap: '1rem',
		gridTemplateColumns: '3fr 1fr',
		gridTemplateAreas: `
            'input button'
        `
	},
	input: {
		gridArea: 'input'
	},
	button: {
		gridArea: 'button'
	}
});

const ShortenLinkForm = () => {
	const classes = useStyles();

	return (
		<div className={classes.layout}>
			<Input
				className={classes.input}
				placeholder="Shorten your link..."
			/>
			<Button className={classes.button} title="Shorten" />
		</div>
	);
};

export { ShortenLinkForm };
