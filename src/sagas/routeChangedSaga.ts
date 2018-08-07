import {put, takeEvery} from 'redux-saga/effects';

import {LOCATION_CHANGE} from 'react-router-redux';
import {RootActions} from '../actions/IRootActions';

export function* routeChangedSaga () {
    yield takeEvery(LOCATION_CHANGE, (action) => fetchData(action));
}

function* fetchData (action: any) {
    // const params = new URLSearchParams(action.payload.search);

    const routeName = action.payload.state && action.payload.state.view;

    let payload = {};

    switch (routeName) {

        case 'OrganisationRoute':

            payload = {organisationId: action.payload.state.organisationId};

            yield put({
                type: RootActions.OrganisationInfoRequested,
                payload
            });
            yield put({
                type: RootActions.ReposRequested,
                payload
            });
            break;

        case 'RepoRoute':

            payload = {
                organisationId: action.payload.state.organisationId,
                repoId: action.payload.state.repoId
            };


            yield put({
                type: RootActions.RepoInfoRequested,
                payload
            });

            yield put({
                type: RootActions.RepoContributorsRequested,
                payload
            });

            break;

    }
}
