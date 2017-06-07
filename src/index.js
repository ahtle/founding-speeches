import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import {Provider} from 'react-redux';
import store from './store';
import history from './core/history';
import App from './components/app';

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App history={history} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
