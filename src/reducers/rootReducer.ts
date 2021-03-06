import {defaultReducer} from './defaultReducer';
import {AnyAction, Reducer} from 'redux';
import {ICommonState} from 'src/interfaces/ICommonState';
import {RootActions} from '../actions/IRootActions';
import {fetchReposReducer} from './fetchReposReducer';
import {saveOrganisationInfoReducer} from './saveOrganisationInfoReducer';
import {saveRepoInfoReducer} from './saveRepoInfoReducer';
import {saveRepoContributorsReducer} from './saveRepoContributorsReducer';
import {saveReposReducer} from './saveReposReducer';
import {saveRateLimitsReducer} from './saveRateLimitsReducer';
import {fetchRepoInfoReducer} from './fetchRepoInfoReducer';
import {fetchRepoContributorsReducer} from './fetchRepoContributorsReducer';

export const rootReducer: Reducer<ICommonState> = (state: ICommonState, action: AnyAction): ICommonState => {

    switch (action.type) {

        case RootActions.RateLimitsUpdated:
            return saveRateLimitsReducer(state, action);

        case RootActions.ReposRequested:
            return fetchReposReducer(state, action);

        case RootActions.RepoInfoRequested:
            return fetchRepoInfoReducer(state, action);

        case RootActions.RepoContributorsRequested:
            return fetchRepoContributorsReducer(state, action);

        case RootActions.ReposFulfilled:
            return saveReposReducer(state, action);

        case RootActions.OrganisationInfoFulfilled:
            return saveOrganisationInfoReducer(state, action);

        case RootActions.RepoInfoFulfilled:
            return saveRepoInfoReducer(state, action);


        case RootActions.RepoContributorsFulfilled:
            return saveRepoContributorsReducer(state, action);

        // -----------------------------------------------------------------

        default:
            return defaultReducer(state, action);
    }
};
