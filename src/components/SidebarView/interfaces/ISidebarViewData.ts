import {IRepoInfo} from 'src/interfaces/IRepoInfo';

export interface ISidebarViewData {
    repoInfo: IRepoInfo;
    organisationId: string;
    repos: IRepoInfo[];
}
