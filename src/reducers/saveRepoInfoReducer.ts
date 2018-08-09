import {ICommonState} from 'src/interfaces/ICommonState';
import {AnyAction} from 'redux';

export const saveRepoInfoReducer = (state: ICommonState, action: AnyAction): ICommonState => {
    return {
        ...state,
        repoInfo: action.payload.data,
        isRepoInfoLoading: false,
    };
};
