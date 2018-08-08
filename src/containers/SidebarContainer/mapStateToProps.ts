import {ICombinedState} from '../../interfaces/ICombinedState';
import {ISidebarViewData} from '../../components/SidebarView/interfaces/ISidebarViewData';

export const mapStateToProps = (state: ICombinedState): { data: ISidebarViewData } => {
    return {
        data: {
            // organisationInfo: state.common.organisationInfo,
            repos: state.common.repos,
            repoInfo: state.common.repoInfo,
            organisationId: '-1',
            // repoContributors: state.common.repoContributors
        }
    };
};
