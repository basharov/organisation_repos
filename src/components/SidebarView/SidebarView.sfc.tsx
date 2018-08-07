import * as React from 'react';
import {SFC} from 'react';
import {ActiveLabel, ListLink, SidebarViewWrapper} from './SidebarView.style';
import {ISidebarViewData} from './interfaces/ISidebarViewData';
import {ISidebarViewActions} from './interfaces/ISidebarViewActions';
import {IRepoInfo} from '../../interfaces/IRepoInfo';

interface ISidebarViewProps {
    data: ISidebarViewData;
    actions: ISidebarViewActions;
}

export const SidebarView: SFC<ISidebarViewProps> = (props) =>

    <SidebarViewWrapper>
        {getReposTitles(props)}
    </SidebarViewWrapper>;

const getReposTitles = (props: ISidebarViewProps) => {

    return props.data.repos.map((repo: IRepoInfo, index: number) => {
            const loc = {
                pathname: `/org/${props.data.organisationId}/${repo.name}`,
                state: {view: 'RepoRoute', organisationId: props.data.organisationId, repoId: repo.name}
            };

            return props.data.repoInfo.name === repo.name
                ?
                <ActiveLabel key={index}>{repo.name}</ActiveLabel>
                :
                <ListLink key={index} to={loc}>{repo.name}</ListLink>;
        }
    );
};
