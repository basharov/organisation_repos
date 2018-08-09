import * as React from 'react';
import {ContributorsListArea, RepoDetailsViewArea, RepoInformationArea} from './RepoDetailsView.style';
import {IRepoDetailsViewData} from './interfaces/IRepoDetailsViewData';
import {IContributor} from '../../interfaces/IContributor';

export interface IRepoDetailsViewProps {
    data: IRepoDetailsViewData;
    // actions: IRepoDetailsViewActions;
}

export const RepoDetailsView = (props: IRepoDetailsViewProps) => {

    return (
        <RepoDetailsViewArea>

            <RepoInformationArea>
                <p>{props.data.repoInfo.name}</p>
                <p>{props.data.repoInfo.description}</p>
            </RepoInformationArea>

            <ContributorsListArea>
                {getContributorsList(props.data.repoContributors)}
            </ContributorsListArea>

        </RepoDetailsViewArea>
    );
};

const getContributorsList = (repoContributors: IContributor[]) => {
    return repoContributors.map((contributor, index: number) => {
        return <p key={index}>{contributor.login}</p>;
    });
};
