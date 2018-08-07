import * as React from 'react';
import {SFC} from 'react';
import {ListLink, SidebarViewWrapper} from './SidebarView.style';
import {ISidebarViewData} from './interfaces/ISidebarViewData';
import {ISidebarViewActions} from './interfaces/ISidebarViewActions';
import {IRepo} from '../../interfaces/IRepo';

interface ISidebarViewProps {
    data: ISidebarViewData;
    actions: ISidebarViewActions;
}

export const SidebarView: SFC<ISidebarViewProps> = (props) =>

    <SidebarViewWrapper>
        {getReposTitles(props)}
    </SidebarViewWrapper>;

const getReposTitles = (props: ISidebarViewProps) => {
    return props.data.repos.map((repo: IRepo, index: number) => {
            const loc = {
                pathname: `/org/${props.data.organisationId}/${repo.name}`,
                state: {view: 'RepoRoute'}
            };

            return <ListLink key={index} to={loc}>{repo.name}</ListLink>;
        }
    );
};
