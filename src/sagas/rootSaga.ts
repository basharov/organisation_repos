import {fork} from 'redux-saga/effects';
import {githubConnectionSaga} from './githubConnectionSaga';

export function* rootSaga () {
    yield fork(githubConnectionSaga);
}
