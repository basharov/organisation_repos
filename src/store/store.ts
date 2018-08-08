import {applyMiddleware, combineReducers, createStore} from 'redux';

import createHistory from 'history/createBrowserHistory';

import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootSaga} from '../sagas/rootSaga';
import {commonDataReducer} from '../reducers/commonDataReducer';
import {ICombinedState} from 'src/interfaces/ICombinedState';

const sagaMiddleware = createSagaMiddleware();
const historyObj = createHistory();
const reducers = {
    common: commonDataReducer
};

const combinedReducers = combineReducers<ICombinedState>(reducers);

const storeWithMiddleware = createStore(
    combinedReducers,
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware
        )
    )
);

sagaMiddleware.run(rootSaga);

export const store = storeWithMiddleware;
export const history = historyObj;
