import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	submit: {
		backgroundColor: '#8FA9BF',
		border: '.25px solid #000000',
		borderRadius: '2rem',
		boxShadow: '0px 0px 0px 2px rgba(48, 48, 48, .2)',
		color: '#f5f5f5',
		fontSize: '1.25rem',
		fontWeight: 'bold',
		height: '3.5rem',
		'&:focus': {
			boxShadow: '0px 0px 0px 2px rgba(255, 255, 255, .4)',
			outline: 'none',
		},
	},
});

const Button = ({ label, onClick, type = 'button', variant }) => {
	const getClassNameByVariant = () => {
		switch (variant) {
			case 'submit':
				return classes.submit;
		}
	};

	const classes = useStyles();

	return (
		<button
			className={getClassNameByVariant()}
			onClick={onClick}
			type={type}
		>
			{label}
		</button>
	);
};

export { Button };
