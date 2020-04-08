import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import { Button, Input } from '../components/ui/ui';
import { validateUrl } from '../util/validation';

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
	const initialState = {
		hasValidationError: true,
		showValidationErrors: false,
		userInput: '',
		validationErrorMessage: 'Input cannot be empty!'
	};

	const [state, setState] = useState(initialState);

	const validateUserInput = value => {
		const isEmpty = !value;
		const isValidUrl = validateUrl(value);

		if (!isEmpty && isValidUrl) {
			setState({
				...state,
				hasValidationError: false,
				userInput: value,
				validationErrorMessage: ''
			});

			return;
		}

		const errorMessage = isEmpty
			? 'Input cannot be empty!'
			: 'Input must be a valid url!';

		setState({
			...state,
			hasValidationError: true,
			userInput: value,
			validationErrorMessage: errorMessage
		});
	};

	const classes = useStyles();

	return (
		<div className={classes.layout}>
			<Input
				className={classes.input}
				onChange={validateUserInput}
				placeholder="Shorten your link..."
				value={state.userInput}
			/>
			<Button className={classes.button} title="Shorten" />
		</div>
	);
};

export { ShortenLinkForm };
