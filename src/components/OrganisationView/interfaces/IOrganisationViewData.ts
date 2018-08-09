import {IRepoInfo} from 'src/interfaces/IRepoInfo';
import {IOrganisationInfo} from 'src/interfaces/IOrganisationInfo';
import {IContributor} from 'src/interfaces/IContributor';
import {IRateLimits} from 'src/interfaces/IRateLimits';

export interface IOrganisationViewData {
    organisationInfo: IOrganisationInfo;
    repoInfo: IRepoInfo;
    repoContributors: IContributor[];
    repos: IRepoInfo[];
    rateLimits: IRateLimits;

    isOrganisationDetailsLoading: boolean;
    isRepoInfoLoading: boolean;
    isRepoContributorsLoading: boolean;
}
