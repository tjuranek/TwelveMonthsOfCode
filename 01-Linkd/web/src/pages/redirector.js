import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getLink } from '../util/api/link';

const Redirector = () => {
	const { key } = useParams();

	useEffect(() => {
		const getLinkByKey = async () => {
			const link = await getLink(key);

			if (!link) {
				// show a 404
			}
			debugger;

			// if the link doesn't include the web protocol prepend it with two slashes
			window.location.href = !link.includes('//') ? '//' + link : link;
		};

		getLinkByKey();
	}, []);

	return null;
};

export { Redirector };
