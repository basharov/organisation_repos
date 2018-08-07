import * as React from 'react';
import {SFC} from 'react';
import {SidebarView} from '../SidebarView/SidebarView.sfc';
import {OrganisationViewArea} from './OrganisationView.style';
import {RepoDetailsView} from '../RepoDetailsView/RepoDetailsView';
import {IOrganisationViewData} from './interfaces/IOrganisationViewData';
import {IOrganisationViewActions} from './interfaces/IOrganisationViewActions';
import {Route, Switch} from 'react-router';
import {OrganisationDetailsView} from '../OrganisationDetailsView/OrganisationDetailsView';

interface IOrganisationViewProps {
    data: IOrganisationViewData;
    actions: IOrganisationViewActions;
}

export const OrganisationView: SFC<IOrganisationViewProps> = (props) => {

    return (
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
    );

};
