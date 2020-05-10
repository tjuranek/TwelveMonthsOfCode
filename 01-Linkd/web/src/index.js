import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './store';
import routes from './routes';

ReactDOM.render(<App>{routes}</App>, document.getElementById('root'));
