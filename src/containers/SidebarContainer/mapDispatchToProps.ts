import {Action, Dispatch} from 'redux';
import {RootActions} from '../../actions/IRootActions';
import {ISidebarViewActions} from '../../components/SidebarView/interfaces/ISidebarViewActions';

export const mapDispatchToProps = (dispatch: Dispatch<Action>): { actions: ISidebarViewActions } => {
    return {
        actions: {
            requestRepoInfoAction: (payload: any) => {
                console.log(payload);
                dispatch<any>({type: RootActions.RepoInfoRequested, payload});
            },
            requestReposAction: (organisationId: string) => {
                dispatch<any>({type: RootActions.ReposRequested, payload: {organisationId}});
            }
        }
    };
};
