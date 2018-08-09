import * as React from 'react';
import {OrganisationViewArea} from './OrganisationView.style';
import {RepoDetailsView} from '../RepoDetailsView/RepoDetailsView.sfc';
import {IOrganisationViewData} from './interfaces/IOrganisationViewData';
import {IOrganisationViewActions} from './interfaces/IOrganisationViewActions';
import {Route, RouteComponentProps, Switch} from 'react-router';
import {OrganisationDetailsView} from '../OrganisationDetailsView/OrganisationDetailsView';
import {HeaderView} from '../HeaderView/HeaderView.sfc';
import {history} from 'src/store/store';
import {Config} from 'src/config';
import {SidebarContainer} from 'src/containers/SidebarContainer/SidebarContainer';

export interface IOrganisationViewProps extends RouteComponentProps<any> {
    data: IOrganisationViewData;
    actions: IOrganisationViewActions;
}

export const OrganisationView = (props: IOrganisationViewProps) => {

    const {organisationId} = props.match.params;
    const {
        repoInfo,
        repoContributors,
        organisationInfo,
        isOrganisationDetailsLoading,
        rateLimits
    } = props.data;

    return (
        <>
            <HeaderView
                data={{organisationId, rateLimits}}
                actions={{
                    pushRouteToOrganisationPage: (orgId: string) => {
                        history.push(`/org/${orgId}`);
                    }
                }}
            />

            <OrganisationViewArea>
                <SidebarContainer/>
                <Switch>

                    <Route exact path={Config.Routes.Organisation}
                           render={() => (
                               <OrganisationDetailsView
                                   data={{
                                       organisationInfo,
                                       isOrganisationDetailsLoading
                                   }}
                               />)}
                    />

                    <Route exact path={Config.Routes.Repo}
                           render={() => (
                               <RepoDetailsView
                                   data={{
                                       repoInfo,
                                       repoContributors
                                   }}
                               />
                           )}

                    />

                    <Route>Empty container</Route>

                </Switch>

            </OrganisationViewArea>
        </>
    );

};
