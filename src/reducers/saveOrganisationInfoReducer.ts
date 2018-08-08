import {ICommonState} from '../interfaces/ICommonState';
import {AnyAction} from 'redux';

export const saveOrganisationInfoReducer = (state: ICommonState, action: AnyAction): ICommonState => {
    return {
        ...state,
        organisationInfo: action.payload,
        repoInfo: {
            name: '',
            description: '',
            subscribers_count: -1,
        }
    };
};
