import {ICommonState} from 'src/interfaces/ICommonState';
import {AnyAction} from 'redux';

export const fetchRepoContributorsReducer = (state: ICommonState, action: AnyAction): ICommonState => {
    return {
        ...state,
        repoContributors: [],
        isRepoContributorsLoading: true
    };
};
