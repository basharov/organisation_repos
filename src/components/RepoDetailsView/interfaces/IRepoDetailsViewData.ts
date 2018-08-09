import {IRepoInfo} from 'src/interfaces/IRepoInfo';
import {IContributor} from 'src/interfaces/IContributor';

export interface IRepoDetailsViewData {
    repoInfo: IRepoInfo;
    repoContributors: IContributor[];
}
