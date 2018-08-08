import {Action, Dispatch} from 'redux';
import {RootActions} from '../../actions/IRootActions';
import {IOrganisationViewActions} from '../../components/OrganisationView/interfaces/IOrganisationViewActions';

export const mapDispatchToProps = (dispatch: Dispatch<Action>): { actions: IOrganisationViewActions } => {
    return {
        actions: {
            requestOrganisationInfoAction: (payload: any) => {
                dispatch<any>({type: RootActions.OrganisationInfoRequested, payload: {organisationId: payload}});
            },
            requestRepoInfoAction: (payload: any) => {
                dispatch<any>({type: RootActions.RepoInfoRequested, payload});
            },
            pushRouteToOrganisationPage: (payload: any) => {
                console.log(payload);
                // dispatch<any>({type: RootActions.RepoInfoRequested, payload});
            }
        }
    };
};
