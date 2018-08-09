import {call, put, takeEvery} from 'redux-saga/effects';
import {RootActions} from '../actions/IRootActions';
import {AnyAction} from 'redux';
import {IUserAction} from 'src/interfaces/IUserAction';
import {fetchOrganisationInfo} from '../api/github/fetchOrganisationInfo';
import {fetchOrganisationRepos} from '../api/github/fetchOrganisationRepos';
import {fetchRepoInfo} from '../api/github/fetchRepoInfo';
import {fetchRepoContributors} from '../api/github/fetchRepoContributors';
import {IDataResponse} from '../interfaces/IDataResponse';
import {IOrganisationInfo} from '../interfaces/IOrganisationInfo';
import {IRepoInfo} from '../interfaces/IRepoInfo';
import {IContributor} from '../interfaces/IContributor';

export function* githubConnectionSaga () {
    yield takeEvery(RootActions.OrganisationInfoRequested, fetchOrganisationInfoSaga);
    yield takeEvery(RootActions.ReposRequested, fetchReposListSaga);
    yield takeEvery(RootActions.RepoInfoRequested, fetchRepoInfoSaga);
    yield takeEvery(RootActions.RepoContributorsRequested, fetchRepoContributorsSaga);
}

function* fetchOrganisationInfoSaga (action: IUserAction<RootActions.OrganisationInfoRequested, { organisationId: string }>) {
    try {
        const payload: IDataResponse<IOrganisationInfo> = yield call(fetchOrganisationInfo, action.payload.organisationId);

        yield put({type: RootActions.RateLimitsUpdated, payload: payload.limits});

        if (payload.error) {
            yield put({type: RootActions.LimitError, payload: payload.error});
        } else {
            yield put({type: RootActions.OrganisationInfoFulfilled, payload: payload.data});
        }


    } catch (error) {
        console.error(error);
    }
}

function* fetchReposListSaga (action: AnyAction) {

    try {
        const payload: IDataResponse<IRepoInfo[]> = yield call(fetchOrganisationRepos, action.payload.organisationId);

        yield put({type: RootActions.RateLimitsUpdated, payload: payload.limits});

        yield put({type: RootActions.ReposFulfilled, payload});

    } catch (error) {
        console.error(error);
    }
}

function* fetchRepoInfoSaga (action: AnyAction) {

    try {
        const payload: IDataResponse<IRepoInfo> = yield call(fetchRepoInfo, action.payload.organisationId, action.payload.repoId);

        yield put({type: RootActions.RateLimitsUpdated, payload: payload.limits});

        yield put({type: RootActions.RepoInfoFulfilled, payload});

    } catch (error) {
        console.error(error);
    }
}

function* fetchRepoContributorsSaga (action: AnyAction) {

    try {

        console.log('contributors')
        console.log('--------------------------------')
        const payload: IDataResponse<IContributor[]> = yield call(fetchRepoContributors, action.payload.organisationId, action.payload.repoId);

        yield put({type: RootActions.RateLimitsUpdated, payload: payload.limits});

        yield put({type: RootActions.RepoContributorsFulfilled, payload});

    } catch (error) {
        console.error(error);
    }
}
