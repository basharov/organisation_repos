import {ICommonState} from 'src/interfaces/ICommonState';
import {IOrganisationViewData} from 'src/components/OrganisationView/interfaces/IOrganisationViewData';

export const mapStateToProps = (state: ICommonState): { data: IOrganisationViewData } => {
    return {
        data: {
            organisationInfo: state.organisationInfo,
            repos: state.repos,
            repoInfo: state.repoInfo,
            repoContributors: state.repoContributors,
            rateLimits: state.rateLimits,

            isOrganisationDetailsLoading: state.isOrganisationDetailsLoading,
            isRepoInfoLoading: state.isRepoInfoLoading,
            isRepoContributorsLoading: state.isRepoContributorsLoading,
        }
    };
};
