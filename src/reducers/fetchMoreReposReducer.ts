import {ICommonState} from '../interfaces/ICommonState';
import {AnyAction} from 'redux';

export const fetchMoreReposReducer = (state: ICommonState, action: AnyAction): ICommonState => {
    return {
        ...state,
        // repos: [],
        isReposLoading: true
    };
};
