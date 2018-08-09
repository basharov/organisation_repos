import * as React from 'react';
import {
    ContributorImage,
    ContributorLabel, ContributorLink, ContributorName,
    ContributorsListArea,
    ContributorsListAreaWrapper,
    RepoDetailsViewArea,
    RepoInformationArea
} from './RepoDetailsView.style';
import {IRepoDetailsViewData} from './interfaces/IRepoDetailsViewData';
import {IContributor} from 'src/interfaces/IContributor';

export interface IRepoDetailsViewProps {
    data: IRepoDetailsViewData;
}

export const RepoDetailsView = (props: IRepoDetailsViewProps) => (
    <RepoDetailsViewArea>

        <RepoInformationArea>
            <p>{props.data.repoInfo.name}</p>
            <p>{props.data.repoInfo.description}</p>
        </RepoInformationArea>

        <ContributorsListAreaWrapper>
            <ContributorsListArea>
                {getContributorsList(props.data.repoContributors)}
            </ContributorsListArea>
        </ContributorsListAreaWrapper>

    </RepoDetailsViewArea>
);

const getContributorsList = (repoContributors: IContributor[]) => {
    return repoContributors.map((contributor, index: number) => {
        return <ContributorLabel key={index}>
            <ContributorLink target={'blank'} href={contributor.html_url}>
                <ContributorImage src={contributor.avatar_url} alt={contributor.login}/>
                <ContributorName>{contributor.login}</ContributorName>
            </ContributorLink>
        </ContributorLabel>;
    });
};
