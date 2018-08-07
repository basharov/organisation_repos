import {defaultReducer} from './defaultReducer';
import {Reducer} from 'redux';
import {ICommonState} from 'src/interfaces/ICommonState';
import {RootActions} from '../actions/IRootActions';
import {saveReposDataReducer} from './saveReposDataReducer';
import {initialCommonState} from './initialCommonState';

export const commonDataReducer: Reducer<ICommonState> = (state: ICommonState = initialCommonState, action: any): ICommonState => {

    switch (action.type) {

        case RootActions.ReposFulfilled:
            return saveReposDataReducer(state, action);

        // -----------------------------------------------------------------

        default:
            return defaultReducer(state, action);
    }
};
