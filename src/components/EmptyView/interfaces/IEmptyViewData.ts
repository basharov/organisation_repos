import {IRepoInfo} from 'src/interfaces/IRepoInfo';
import {IContributor} from 'src/interfaces/IContributor';

export interface IEmptyViewData {
    repoInfo: IRepoInfo;
    repoContributors: IContributor[];
}
