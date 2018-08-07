import {fork} from 'redux-saga/effects';
import {routeChangedSaga} from './routeChangedSaga';
import {githubConnectionSaga} from './githubConnectionSaga';

export function* rootSaga () {
    yield fork(routeChangedSaga);
    yield fork(githubConnectionSaga);
}
