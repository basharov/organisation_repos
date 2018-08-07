import {call, put, takeEvery} from 'redux-saga/effects';
import {RootActions} from '../actions/IRootActions';
import {getOrganisationInfo, getOrganisationRepos, getRepoInfo} from '../api/GitHubConnector';
import {AnyAction} from 'redux';

export function* githubConnectionSaga () {
    yield takeEvery(RootActions.OrganisationInfoRequested, (action: AnyAction) => fetchOrganisationInfo(action));
    yield takeEvery(RootActions.ReposRequested, (action: AnyAction) => fetchReposList(action));
    yield takeEvery(RootActions.RepoInfoRequested, (action) => fetchRepoInfo(action));
}

function* fetchOrganisationInfo (action: AnyAction) {
    console.log('======================')
    console.log(action)
    console.log('======================')
    try {
        const repos = yield call(getOrganisationInfo, action.payload.organisationId);
        yield put({type: RootActions.RepoInfoFulfilled, payload: repos});

    } catch (error) {
        console.error(error);
    }
}

function* fetchReposList (action: AnyAction) {

    console.log('*********************')
    console.log(action.payload.organisationId)
    console.log('*********************')

    try {
        const repos = yield call(getOrganisationRepos, action.payload.organisationId, 1);
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
