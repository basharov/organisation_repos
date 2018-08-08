import * as React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {Switch} from 'react-router';
import {OrganisationContainer} from '../OrganisationContainer/OrganisationContainer';
import {Config} from '../../config';
import {SidebarContainer} from '../SidebarContainer/SidebarContainer';
import {EmptyView} from '../../components/EmptyView/EmptyView.sfc';

export const RootContainer = () =>
    (
        <>

            <SidebarContainer/>

            <Switch>

                <Route path='/org/:organisationId'
                       component={OrganisationContainer}
                />

                <Route exact path={'/'}>
                    <Redirect to={`/org/${Config.DefaultOrganisationId}`}/>
                </Route>

                <Route component={EmptyView}
                />

            </Switch>

        </>

    );
