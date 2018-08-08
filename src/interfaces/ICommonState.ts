import {IOrganisationInfo} from './IOrganisationInfo';
import {IRepoInfo} from './IRepoInfo';
import {IContributor} from './IContributor';

export interface ICommonState {
    repos: IRepoInfo[];
    organisationInfo: IOrganisationInfo;
    isOrganisationDetailsLoading: boolean;
    repoInfo: IRepoInfo;
    repoContributors: IContributor[];
    isReposLoading: boolean;
}
