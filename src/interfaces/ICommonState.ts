import {IOrganisationInfo} from './IOrganisationInfo';
import {IRepoInfo} from './IRepoInfo';
import {IContributor} from './IContributor';

export interface ICommonState {
    readonly repos: IRepoInfo[];
    readonly organisationInfo: IOrganisationInfo;
    readonly repoInfo: IRepoInfo;
    readonly repoContributors: IContributor[];
}
