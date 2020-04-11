import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	message: {
		backgroundColor: 'rgba(255, 255, 255, 0.7)',
		borderRadius: '.25rem',
		color: 'red',
		display: 'inline',
		fontSize: '.85rem',
		padding: '.25rem',
		position: 'relative',
		top: '.25rem',
	},
	input: {
		backgroundColor: '#f5f5f5',
		border: '.25px solid #303030',
		borderRadius: '.25rem',
		boxShadow: '0px 0px 0px 2px rgba(48, 48, 48, .2)',
		fontSize: '1rem',
		height: '3.5rem',
		paddingLeft: '1rem',
		width: '100%',
		'&:focus ': {
			boxShadow: '0px 0px 0px 2px rgba(255, 255, 255, .4)',
			outline: 'none',
		},
	},
	inputError: {
		border: '1.25px solid red',
		boxShadow: '0px 0px 0px 1px rgba(255, 0, 0, .2)',
	},
	/* 
	.effect - 11 ~ .focus - bg{ position: absolute; left: 0; top: 0; width: 0; height: 100 %; background- color: #ededed; transition: 0.3s; z - index: -1;}
.effect - 11: focus ~ .focus - bg{ transition: 0.3s; width: 100 %; } */
});

const Input = ({ hasError, helperText, onChange, placeholder, value }) => {
	const classes = useStyles();

	return (
		<div>
			<input
				className={`${classes.input} ${
					hasError ? classes.inputError : ''
				}`}
				onChange={(event) => onChange(event.target.value)}
				placeholder={placeholder}
				type="text"
				value={value}
			/>

			{hasError && <p className={classes.message}>{helperText}</p>}
		</div>
	);
};

export { Input };
