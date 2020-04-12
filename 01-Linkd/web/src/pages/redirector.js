import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { getLink } from '../util/api/link';

const Redirector = () => {
	const history = useHistory();
	const { key } = useParams();

	useEffect(() => {
		const getLinkByKey = async () => {
			const link = await getLink(key);

			if (link) {
				history.push('/not-found');
				return;
			}

			// if the link doesn't include the web protocol prepend it with two slashes
			window.location.href = !link.includes('//') ? '//' + link : link;
		};

		getLinkByKey();
	}, []);

	return null;
};

export { Redirector };
