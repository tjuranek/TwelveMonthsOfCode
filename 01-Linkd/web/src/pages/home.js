import React from 'react';

import { Logo } from '../components/logo';
import { SingleInputForm } from '../components/single-input-form';
import { Footer } from '../components/footer';

const Home = () => {
	return (
		<>
			<Logo />
			<SingleInputForm />
			<Footer />
		</>
	);
};

export { Home };
