import {Action, Dispatch} from 'redux';
import {RootActions} from '../../actions/IRootActions';
import {ISidebarViewActions} from '../../components/SidebarView/interfaces/ISidebarViewActions';
import {store} from 'src/store/store';

export const mapDispatchToProps = (dispatch: Dispatch<Action>): { actions: ISidebarViewActions } => {
    return {
        actions: {
            requestRepoInfoAction: (payload: any) => {
                console.log(payload);
                dispatch<any>({type: RootActions.RepoInfoRequested, payload});
            },
            fetchReposAction: (organisationId: string) => {

                const state = store.getState();

                let pageToFetch;

                console.log(state.reposLastPageFetched, state.reposTotalPagesCount)

                if (state.reposLastPageFetched < state.reposTotalPagesCount) {
                    pageToFetch = state.reposLastPageFetched += 1;
                } else {
                    pageToFetch = state.reposTotalPagesCount;
                }

                console.log(pageToFetch)

                dispatch<any>({type: RootActions.ReposRequested, payload: {organisationId, pageToFetch}});
            }
        }
    };
};
