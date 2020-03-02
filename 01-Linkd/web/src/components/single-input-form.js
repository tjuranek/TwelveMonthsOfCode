import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	container: {
		display: 'grid',
		gridTemplateColumns: '75% 25%',
		gridTemplateRows: 'auto',
		gridTemplateAreas: `
            'input button'
        `
	}
});

const SingleInputForm = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<input class="input" className={classes.input} type="text" />
			<button class="button" type="button">
				Submit
			</button>
		</div>
	);
};

export { SingleInputForm };
