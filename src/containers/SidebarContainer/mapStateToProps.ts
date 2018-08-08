import {ISidebarViewData} from '../../components/SidebarView/interfaces/ISidebarViewData';
import {ICommonState} from '../../interfaces/ICommonState';

export const mapStateToProps = (state: ICommonState): { data: ISidebarViewData } => {
    return {
        data: {
            // organisationInfo: state.common.organisationInfo,
            repos: state.repos,
            repoInfo: state.repoInfo,
            // repoContributors: state.common.repoContributors
        }
    };
};
