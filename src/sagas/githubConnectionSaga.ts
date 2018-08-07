import {call, put, takeEvery} from 'redux-saga/effects';
import {RootActions} from '../actions/IRootActions';
import {getFacebookRepos, getRepoInfo} from '../api/GitHubConnector';

export function* githubConnectionSaga () {
    yield takeEvery(RootActions.ReposRequested, (action) => fetchReposList(action));
    yield takeEvery(RootActions.RepoInfoRequested, (action) => fetchRepoInfo(action));
}

function* fetchReposList (action: any) {
    try {
        const repos = yield call(getFacebookRepos, 1);
        yield put({type: RootActions.ReposFulfilled, payload: repos});

    } catch (error) {
        console.error(error);
    }
}

function* fetchRepoInfo (action: any) {
    console.log(action)
    try {
        const repos = yield call(getRepoInfo, 'nailgun');
        yield put({type: RootActions.RepoInfoFulfilled, payload: repos});

    } catch (error) {
        console.error(error);
    }
}
