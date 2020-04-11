import React from 'react';
import { createUseStyles } from 'react-jss';

import { Button } from './ui';

const useStyles = createUseStyles({});

const LinkCard = ({ link }) => {
	const classes = useStyles();

	return <p>{link}</p>;
};

export { LinkCard };
