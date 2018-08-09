import {IOrganisationInfo} from './IOrganisationInfo';
import {IRepoInfo} from './IRepoInfo';
import {IContributor} from './IContributor';
import {IRateLimits} from './IRateLimits';

export interface ICommonState {
    repos: IRepoInfo[];
    organisationInfo: IOrganisationInfo;
    isOrganisationDetailsLoading: boolean;
    repoInfo: IRepoInfo;
    repoContributors: IContributor[];
    isReposLoading: boolean;
    rateLimits: IRateLimits;
}
