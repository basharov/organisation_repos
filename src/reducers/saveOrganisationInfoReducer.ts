import {ICommonState} from 'src/interfaces/ICommonState';
import {AnyAction} from 'redux';

export const saveOrganisationInfoReducer = (state: ICommonState, action: AnyAction): ICommonState => {
    return {
        ...state,
        organisationInfo: action.payload,
        isOrganisationDetailsLoading: false,
        repoInfo: {
            name: '',
            description: '',
            subscribers_count: -1,
            watchers_count: -1,
        }
    };
};
