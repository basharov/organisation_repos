import {IOrganisationViewData} from '../../components/OrganisationView/interfaces/IOrganisationViewData';
import {ICommonState} from '../../interfaces/ICommonState';

export const mapStateToProps = (state: ICommonState): { data: IOrganisationViewData } => {
    return {
        data: {
            organisationInfo: state.organisationInfo,
            repos: state.repos,
            repoInfo: state.repoInfo,
            repoContributors: state.repoContributors
        }
    };
};
