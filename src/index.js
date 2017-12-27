import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.scss';
import Root from './app/Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
