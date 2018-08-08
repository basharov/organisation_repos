import {IRepoInfo} from '../../../interfaces/IRepoInfo';
import {IContributor} from '../../../interfaces/IContributor';

export interface IEmptyViewData {
    repoInfo: IRepoInfo;
    repoContributors: IContributor[];
}
