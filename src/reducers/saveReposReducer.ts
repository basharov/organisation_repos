import {ICommonState} from '../interfaces/ICommonState';
import {AnyAction} from 'redux';
import {IRepoInfo} from '../interfaces/IRepoInfo';

export const saveReposReducer = (state: ICommonState, action: AnyAction): ICommonState => {

    const reposSorted = action.payload.sort((repo1: IRepoInfo, repo2: IRepoInfo) => {
        return repo2.watchers_count - repo1.watchers_count;
    })

    return {
        ...state,
        repos: reposSorted,
        reposTotalPagesCount: action.payload.totalPagesCount,
        reposLastPageFetched: action.payload.lastPageFetched,
        isReposLoading: false
    };
};
