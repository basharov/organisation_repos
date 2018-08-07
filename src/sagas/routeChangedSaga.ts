import {put, takeEvery} from 'redux-saga/effects';

import {LOCATION_CHANGE} from 'react-router-redux';
import {RootActions} from '../actions/IRootActions';

export function* routeChangedSaga () {
    yield takeEvery(LOCATION_CHANGE, (action) => fetchData(action));
}

function* fetchData (action: any) {
    console.log(action);
    // const params = new URLSearchParams(action.payload.search);

    const routeName = action.payload.state && action.payload.state.view;
    console.log(routeName)

    switch (routeName) {

        case 'OrganisationRoute':
            yield put({type: RootActions.ReposRequested});
            break;

        case 'RepoRoute':
            yield put({type: RootActions.RepoInfoRequested});
            break;

    }
}
