import {applyMiddleware, combineReducers, createStore, Store} from 'redux';

import createHistory from 'history/createBrowserHistory';
import {routerMiddleware, routerReducer} from 'react-router-redux';

import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootSaga} from '../sagas/rootSaga';
import {commonDataReducer} from '../reducers/commonDataReducer';
import {ICombinedState} from 'src/interfaces/ICombinedState';

const sagaMiddleware = createSagaMiddleware();
const historyObj = createHistory();
const historyMiddleware = routerMiddleware(historyObj);

const reducers = {
    common: commonDataReducer,
    router: routerReducer
};

const combinedReducers = combineReducers<ICombinedState>(reducers);

const storeWithMiddleware = createStore(combinedReducers, composeWithDevTools(applyMiddleware(sagaMiddleware, historyMiddleware))) as Store<ICombinedState>;
sagaMiddleware.run(rootSaga);

export const store = storeWithMiddleware;
export const history = historyObj;
