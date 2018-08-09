import {IOrganisationInfo} from './IOrganisationInfo';
import {IRepoInfo} from './IRepoInfo';
import {IContributor} from './IContributor';
import {IRateLimits} from './IRateLimits';

export interface ICommonState {
    repos: IRepoInfo[];
    organisationInfo: IOrganisationInfo;
    repoInfo: IRepoInfo;
    repoContributors: IContributor[];
    rateLimits: IRateLimits;

    isOrganisationDetailsLoading: boolean;
    isReposLoading: boolean;
    isRepoInfoLoading: boolean;
    isRepoContributorsLoading: boolean;
}
