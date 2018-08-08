import {call, put, takeEvery} from 'redux-saga/effects';
import {RootActions} from '../actions/IRootActions';
import {getOrganisationInfo, getOrganisationRepos, getRepoContributors, getRepoInfo} from '../api/GitHubConnector';
import {AnyAction} from 'redux';
import {IUserAction} from '../interfaces/IUserAction';

export function* githubConnectionSaga () {
    yield takeEvery(RootActions.OrganisationInfoRequested, (action: IUserAction<RootActions.OrganisationInfoRequested, { organisationId: string }>) => fetchOrganisationInfo(action));
    yield takeEvery(RootActions.ReposRequested, (action: AnyAction) => fetchReposList(action));
    yield takeEvery(RootActions.RepoInfoRequested, (action) => fetchRepoInfo(action));
    yield takeEvery(RootActions.RepoContributorsRequested, (action) => fetchRepoContributors(action));
}

function* fetchOrganisationInfo (action: IUserAction<RootActions.OrganisationInfoRequested, { organisationId: string }>) {
    try {
        const info = yield call(getOrganisationInfo, action.payload.organisationId);
        yield put({type: RootActions.OrganisationInfoFulfilled, payload: info});

    } catch (error) {
        console.error(error);
    }
}

function* fetchReposList (action: AnyAction) {
    try {
        const repos = yield call(getOrganisationRepos, action.payload.organisationId, 1);
        yield put({type: RootActions.ReposFulfilled, payload: repos});

    } catch (error) {
        console.error(error);
    }
}

function* fetchRepoInfo (action: AnyAction) {

    try {
        const repos = yield call(getRepoInfo, action.payload.organisationId, action.payload.repoId);
        yield put({type: RootActions.RepoInfoFulfilled, payload: repos});

    } catch (error) {
        console.error(error);
    }
}

function* fetchRepoContributors (action: AnyAction) {

    try {
        const repos = yield call(getRepoContributors, action.payload.organisationId, action.payload.repoId);
        yield put({type: RootActions.RepoContributorsFulfilled, payload: repos});

    } catch (error) {
        console.error(error);
    }
}
