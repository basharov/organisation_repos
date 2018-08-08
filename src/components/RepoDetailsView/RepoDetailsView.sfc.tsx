import * as React from 'react';
import {RepoDetailsViewArea} from './RepoDetailsView.style';
import {IRepoDetailsViewData} from './interfaces/IRepoDetailsViewData';
import {IContributor} from '../../interfaces/IContributor';

export interface IRepoDetailsViewProps {
    data: IRepoDetailsViewData;
    // actions: IRepoDetailsViewActions;
}

export const RepoDetailsView = (props: IRepoDetailsViewProps) => {
    return (
        <RepoDetailsViewArea>

            <p>{props.data.repoInfo.name}</p>
            <p>{props.data.repoInfo.description}</p>

            <ul>
                {getContributorsList(props.data.repoContributors)}
            </ul>

        </RepoDetailsViewArea>
    );
};

const getContributorsList = (repoContributors: IContributor[]) => {
    return repoContributors.map((contributor, index: number) => {
        return <p key={index}>{contributor.login}</p>;
    });
};
