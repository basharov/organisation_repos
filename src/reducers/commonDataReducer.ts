import {defaultReducer} from './defaultReducer';
import {Reducer} from 'redux';
import {ICommonState} from 'src/interfaces/ICommonState';
import {RootActions} from '../actions/IRootActions';
import {saveReposDataReducer} from './saveReposDataReducer';
import {initialCommonState} from './initialCommonState';
import {saveOrganisationInfoReducer} from './saveOrganisationInfoReducer';
import {saveRepoInfoReducer} from './saveRepoInfoReducer';
import {saveRepoContributorsReducer} from './saveRepoContributorsReducer';

export const commonDataReducer: Reducer<ICommonState> = (state: ICommonState = initialCommonState, action: any): ICommonState => {

    switch (action.type) {

        case RootActions.ReposFulfilled:
            return saveReposDataReducer(state, action);


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
