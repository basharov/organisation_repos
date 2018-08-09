import {call, put, takeEvery} from 'redux-saga/effects';
import {RootActions} from '../actions/IRootActions';
import {AnyAction} from 'redux';
import {IUserAction} from '../interfaces/IUserAction';
import {fetchOrganisationInfo} from '../api/github/fetchOrganisationInfo';
import {fetchOrganisationRepos} from '../api/github/fetchOrganisationRepos';
import {fetchRepoInfo} from '../api/github/fetchRepoInfo';
import {fetchRepoContributors} from '../api/github/fetchRepoContributors';

export function* githubConnectionSaga () {
    yield takeEvery(RootActions.OrganisationInfoRequested, fetchOrganisationInfoSaga);
    yield takeEvery(RootActions.ReposRequested, fetchReposListSaga);
    yield takeEvery(RootActions.RepoInfoRequested, fetchRepoInfoSaga);
    yield takeEvery(RootActions.RepoContributorsRequested, fetchRepoContributorsSaga);
}

function* fetchOrganisationInfoSaga (action: IUserAction<RootActions.OrganisationInfoRequested, { organisationId: string }>) {
    try {
        const info = yield call(fetchOrganisationInfo, action.payload.organisationId);
        yield put({type: RootActions.OrganisationInfoFulfilled, payload: info});

    } catch (error) {
        console.error(error);
    }
}

function* fetchReposListSaga (action: AnyAction) {

    try {
        const payload = yield call(fetchOrganisationRepos, action.payload.organisationId);

        yield put({type: RootActions.ReposFulfilled, payload});

    } catch (error) {
        console.error(error);
    }
}

function* fetchRepoInfoSaga (action: AnyAction) {

    try {
        const repos = yield call(fetchRepoInfo, action.payload.organisationId, action.payload.repoId);
        yield put({type: RootActions.RepoInfoFulfilled, payload: repos});

    } catch (error) {
        console.error(error);
    }
}

function* fetchRepoContributorsSaga (action: AnyAction) {

    try {
        const repos = yield call(fetchRepoContributors, action.payload.organisationId, action.payload.repoId);
        yield put({type: RootActions.RepoContributorsFulfilled, payload: repos});

    } catch (error) {
        console.error(error);
    }
}
