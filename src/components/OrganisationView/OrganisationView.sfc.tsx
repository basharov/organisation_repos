import * as React from 'react';
import {SFC} from 'react';
import {SidebarView} from '../SidebarView/SidebarView.sfc';
import {OrganisationViewArea} from './OrganisationView.style';
import {RepoDetailsView} from '../RepoDetailsView/RepoDetailsView.sfc';
import {IOrganisationViewData} from './interfaces/IOrganisationViewData';
import {IOrganisationViewActions} from './interfaces/IOrganisationViewActions';
import {Route, RouteComponentProps, Switch} from 'react-router';
import {OrganisationDetailsView} from '../OrganisationDetailsView/OrganisationDetailsView';
import {HeaderView} from '../HeaderView/HeaderView.sfc';

import {history} from 'src/store/store';

interface IOrganisationViewProps extends RouteComponentProps<any> {
    data: IOrganisationViewData;
    actions: IOrganisationViewActions;
}

export const OrganisationView: SFC<IOrganisationViewProps> = (props) => {

    const {organisationId} = props.match.params;
    const {repoInfo} = props.data;

    return (
        <>
            <HeaderView
                data={{organisationId}}
                actions={{
                    pushRouteToOrganisationPage: (orgId: string) => {
                        history.push(`/org/${orgId}`);
                    }
                }}
            />

            <OrganisationViewArea>

                <SidebarView
                    data={{
                        repoInfo,
                        repos: props.data.repos,
                        organisationId: organisationId
                    }}
                    actions={
                        {
                            requestRepoInfoAction: props.actions.requestRepoInfoAction
                        }
                    }/>

                <Switch>

                    <Route exact path={'/org/:organisationId'}
                           render={() => {
                               return <OrganisationDetailsView
                                   data={{organisationInfo: props.data.organisationInfo}}
                               />;
                           }}
                    />

                    <Route exact path={'/org/:organisationId/:repoId'}
                           render={() => {
                               return <RepoDetailsView
                                   data={{
                                       repoInfo: props.data.repoInfo,
                                       repoContributors: props.data.repoContributors
                                   }}
                               />;
                           }}

                    />

                    <Route>Empty container</Route>

                </Switch>

            </OrganisationViewArea>
        </>
    );

};
