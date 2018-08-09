import * as React from 'react';
import {
    ContributorImage,
    ContributorLabel,
    ContributorLink,
    ContributorName,
    ContributorsListArea,
    ContributorsListAreaWrapper,
    RepoDetailsViewArea,
    RepoInformationArea
} from './RepoDetailsView.style';
import {IRepoDetailsViewData} from './interfaces/IRepoDetailsViewData';
import {IContributor} from '../../interfaces/IContributor';
import {Spinner} from '../Spinner/Spinner.sfc';

export interface IRepoDetailsViewProps {
    data: IRepoDetailsViewData;
}

export const RepoDetailsView = (props: IRepoDetailsViewProps) => {
    return (
        <RepoDetailsViewArea>

            <RepoInformationArea>
                {
                    props.data.isRepoInfoLoading
                        ?
                        <Spinner/>
                        :
                        <>
                            <h1>{props.data.repoInfo.name}</h1>
                            <h3>{props.data.repoInfo.description}</h3>
                            <p>{props.data.repoInfo.watchers_count} watchers</p>
                            <p>{props.data.repoInfo.subscribers_count} subscribers</p>

                        </>
                }
            </RepoInformationArea>

            <ContributorsListAreaWrapper>
                {props.data.isRepoContributorsLoading ? <Spinner/> : null}
                <ContributorsListArea>
                    {getContributorsList(props.data.repoContributors)}
                </ContributorsListArea>
            </ContributorsListAreaWrapper>

        </RepoDetailsViewArea>);
};

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
