import * as React from 'react';
import {SFC} from 'react';
import {ActiveLabel, ListLink, SidebarViewWrapper} from './SidebarView.style';
import {ISidebarViewData} from './interfaces/ISidebarViewData';
import {ISidebarViewActions} from './interfaces/ISidebarViewActions';
import {IRepoInfo} from '../../interfaces/IRepoInfo';
import {RouteComponentProps} from 'react-router';
import {Spinner} from '../Spinner/Spinner.sfc';

interface ISidebarViewProps extends RouteComponentProps<any> {
    data: ISidebarViewData;
    actions: ISidebarViewActions;
}

export const SidebarView: SFC<ISidebarViewProps> = (props) => (
    <SidebarViewWrapper>
        {props.data.isReposLoading ? <Spinner/> : null}
        {getReposTitles(props)}
    </SidebarViewWrapper>
);

const getReposTitles = (props: ISidebarViewProps) => {

    return props.data.repos.map((repo: IRepoInfo, index: number) => {
            return props.data.repoInfo.name === repo.name
                ?
                <ActiveLabel key={index}>{repo.name} ({repo.watchers_count})</ActiveLabel>
                :
                <ListLink key={index}
                          to={`/org/${props.match.params.organisationId}/${repo.name}`}>
                    {repo.name} ({repo.watchers_count})
                </ListLink>;
        }
    );
};
