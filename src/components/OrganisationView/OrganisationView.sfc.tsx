import * as React from 'react';
import {SFC} from 'react';
import {SidebarView} from '../SidebarView/SidebarView.sfc';
import {OrganisationViewArea} from './OrganisationView.style';
import {RepoDetailsView} from '../RepoDetailsView/RepoDetailsView';
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
    const {pushRouteToOrganisationPage} = props.actions;

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
                        repos: props.data.repos,
                        organisationId: props.data.organisationId
                    }}
                    actions={
                        {
                            requestRepoInfoAction: props.actions.requestRepoInfoAction
                        }
                    }/>

                <Switch>

                    <Route exact path={'/org/:organisationId'}
                           component={OrganisationDetailsView}
                    />

                    <Route exact path={'/org/:organisationId/:repoId'}
                           component={RepoDetailsView}
                    />

                    <Route>Empty container</Route>

                </Switch>

            </OrganisationViewArea>
        </>
    );

};
