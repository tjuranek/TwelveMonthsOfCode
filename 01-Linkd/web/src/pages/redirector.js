import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { getLink } from '../util/api/link';

const Redirector = () => {
	const history = useHistory();
	const { key } = useParams();

	useEffect(() => {
		const getLinkByKey = async () => {
			const link = await getLink(key);

			if (!link) {
				history.push('/not-found');

				return;
			}

			// using replace here so hitting the back button doesn't cause the redirect again
			// if the link doesn't include the web protocol prepend it with two slashes
			window.location.replace(!link.includes('//') ? '//' + link : link);
		};

		getLinkByKey();
	}, []);

	return null;
};

export { Redirector };
