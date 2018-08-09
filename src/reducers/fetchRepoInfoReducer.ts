import {ICommonState} from 'src/interfaces/ICommonState';
import {AnyAction} from 'redux';
import {initialRepoInfo} from './initialCommonState';

export const fetchRepoInfoReducer = (state: ICommonState, action: AnyAction): ICommonState => {
    return {
        ...state,
        isRepoInfoLoading: true
    };
};
