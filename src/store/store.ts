import {applyMiddleware, createStore} from 'redux';

import createHistory from 'history/createBrowserHistory';

import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootSaga} from '../sagas/rootSaga';
import {rootReducer} from 'src/reducers/rootReducer';
import {initialCommonState} from '../reducers/initialCommonState';
import {startRouteListener} from './startRouteListener';

const sagaMiddleware = createSagaMiddleware();

export const history = createHistory();

export const store = createStore(
    rootReducer,
    initialCommonState,
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware
        )
    )
);

sagaMiddleware.run(rootSaga);
startRouteListener(history, store);
