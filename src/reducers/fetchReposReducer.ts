import {ICommonState} from 'src/interfaces/ICommonState';
import {AnyAction} from 'redux';

export const fetchReposReducer = (state: ICommonState, action: AnyAction): ICommonState => {
    return {
        ...state,
        // repos: [],
        isReposLoading: true
    };
};
