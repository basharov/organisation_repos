import {Action, Dispatch} from 'redux';
import {RootActions} from '../../actions/IRootActions';

export const mapDispatchToProps = (dispatch: Dispatch<Action>): { readonly actions: any } => {
    return {
        actions: {
            requestRepoInfoAction: (payload: any) => {
                console.log(payload);
                dispatch<any>({type: RootActions.RepoInfoRequested, payload});
            },

            setMetricsParameter: (payload: any) => {
                dispatch<any>({type: '123', payload});
            },
        }
    };
};
