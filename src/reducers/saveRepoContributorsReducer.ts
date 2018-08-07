import {ICommonState} from '../interfaces/ICommonState';
import {AnyAction} from 'redux';

export const saveRepoContributorsReducer = (state: ICommonState, action: AnyAction): ICommonState => {
    return {
        ...state,
        repoContributors: action.payload
    };
};
