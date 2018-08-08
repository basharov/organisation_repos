import {IOrganisationInfo} from './IOrganisationInfo';
import {IRepoInfo} from './IRepoInfo';
import {IContributor} from './IContributor';

export interface ICommonState {
    repos: IRepoInfo[];
    reposTotalPagesCount: number;
    reposLastPageFetched: number;
    organisationInfo: IOrganisationInfo;
    isOrganisationDetailsLoading: boolean;
    repoInfo: IRepoInfo;
    repoContributors: IContributor[];
    isReposLoading: boolean;
}
