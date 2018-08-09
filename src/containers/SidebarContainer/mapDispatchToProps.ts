import {Action, Dispatch} from 'redux';
import {RootActions} from '../../actions/IRootActions';
import {store} from 'src/store/store';
import {ISidebarViewActions} from 'src/components/SidebarView/interfaces/ISidebarViewActions';

export const mapDispatchToProps = (dispatch: Dispatch<Action>): { actions: ISidebarViewActions } => {
    return {
        actions: {
            requestRepoInfoAction: (payload: any) => {
                dispatch<any>({type: RootActions.RepoInfoRequested, payload});
            },
            fetchReposAction: (organisationId: string) => {

                const state = store.getState();

                let pageToFetch;

                if (state.reposLastPageFetched < state.reposTotalPagesCount) {
                    pageToFetch = state.reposLastPageFetched += 1;
                } else {
                    pageToFetch = state.reposTotalPagesCount;
                }

                dispatch<any>({type: RootActions.ReposRequested, payload: {organisationId, pageToFetch}});
            }
        }
    };
};
