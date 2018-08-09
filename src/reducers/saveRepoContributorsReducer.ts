import {ICommonState} from 'src/interfaces/ICommonState';
import {AnyAction} from 'redux';

export const saveRepoContributorsReducer = (state: ICommonState, action: AnyAction): ICommonState => {
    return {
        ...state,
        repoContributors: action.payload.data,
        isRepoContributorsLoading: false,
    };
};
