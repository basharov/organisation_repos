import {ICommonState} from 'src/interfaces/ICommonState';
import {AnyAction} from 'redux';

export const saveRateLimitsReducer = (state: ICommonState, action: AnyAction): ICommonState => {
    const rateLimits = action.payload ? action.payload : state.rateLimits;
    return {
        ...state,
        rateLimits
    };
};
