import {ICommonState} from '../interfaces/ICommonState';
import {AnyAction} from 'redux';

export const saveRepoInfoReducer = (state: ICommonState, action: AnyAction): ICommonState => {
    return {
        ...state,
        repoInfo: action.payload
    };
};