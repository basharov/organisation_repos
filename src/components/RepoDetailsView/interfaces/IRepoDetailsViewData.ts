import {IRepoInfo} from '../../../interfaces/IRepoInfo';
import {IContributor} from '../../../interfaces/IContributor';

export interface IRepoDetailsViewData {
    repoInfo: IRepoInfo;
    repoContributors: IContributor[];
}
