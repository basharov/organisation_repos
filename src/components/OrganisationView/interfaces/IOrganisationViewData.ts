import {IRepoInfo} from 'src/interfaces/IRepoInfo';
import {IOrganisationInfo} from '../../../interfaces/IOrganisationInfo';
import {IContributor} from '../../../interfaces/IContributor';

export interface IOrganisationViewData {
    organisationInfo: IOrganisationInfo;
    repoInfo: IRepoInfo;
    repoContributors: IContributor[];
    repos: IRepoInfo[];
}
