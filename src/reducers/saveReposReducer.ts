import {ICommonState} from 'src/interfaces/ICommonState';
import {IRepoInfo} from 'src/interfaces/IRepoInfo';
import {AnyAction} from 'redux';

export const saveReposReducer = (state: ICommonState, action: AnyAction): ICommonState => {

    const reposSorted = action.payload.data.sort((repo1: IRepoInfo, repo2: IRepoInfo) => {
        return repo2.watchers_count - repo1.watchers_count;
    });

    return {
        ...state,
        repos: reposSorted,
        isReposLoading: false
    };

};
