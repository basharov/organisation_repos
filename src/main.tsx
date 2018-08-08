import * as React from 'react';
import {Provider} from 'react-redux';
import {history, store} from './store/store';
import {render} from 'react-dom';
import {RootContainer} from './containers/RootContainer/RootContainer';
import {Router} from 'react-router-dom';

render(
    <Provider store={store}>

        <Router history={history}>
            <RootContainer/>
        </Router>

    </Provider>,
    document.getElementById('root'),
);
