import {ICombinedState} from '../../interfaces/ICombinedState';
import {ICommonState} from '../../interfaces/ICommonState';

export const mapStateToProps = (state: ICombinedState): { data: ICommonState } => {
    return {
        data: {
            organisationInfo: state.common.organisationInfo,
            repos: state.common.repos,
            repoInfo: state.common.repoInfo,
            repoContributors: state.common.repoContributors
        }
    };
};
