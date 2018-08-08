import {ICombinedState} from '../../interfaces/ICombinedState';
import {ICommonState} from '../../interfaces/ICommonState';
import {IOrganisationViewData} from '../../components/OrganisationView/interfaces/IOrganisationViewData';

export const mapStateToProps = (state: ICombinedState): { data: IOrganisationViewData } => {
    return {
        data: {
            organisationInfo: state.common.organisationInfo,
            repos: state.common.repos,
            repoInfo: state.common.repoInfo,
            repoContributors: state.common.repoContributors
        }
    };
};
