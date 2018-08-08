import * as React from 'react';
import {Component} from 'react';
import {ActiveLabel, ListLink, SidebarViewWrapper} from './SidebarView.style';
import {ISidebarViewData} from './interfaces/ISidebarViewData';
import {ISidebarViewActions} from './interfaces/ISidebarViewActions';
import {IRepoInfo} from '../../interfaces/IRepoInfo';
import {RouteComponentProps} from 'react-router';

interface ISidebarViewProps extends RouteComponentProps<any> {
    data: ISidebarViewData;
    actions: ISidebarViewActions;
}

export class SidebarView extends Component<ISidebarViewProps> {
    public scrollableRef: React.RefObject<any>;

    constructor (props: ISidebarViewProps) {
        super(props);
        this.scrollableRef = React.createRef();
    }

    public componentDidUpdate () {
        console.log(this.scrollableRef);
    }

    public render () {
        return <SidebarViewWrapper ref={this.scrollableRef}>
            {getReposTitles(this.props)}
        </SidebarViewWrapper>;
    }
}

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
