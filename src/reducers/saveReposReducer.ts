import {ICommonState} from '../interfaces/ICommonState';
import {AnyAction} from 'redux';

export const saveReposReducer = (state: ICommonState, action: AnyAction): ICommonState => {
    return {
        ...state,
        repos: action.payload,
        isReposLoading: false
    };
};