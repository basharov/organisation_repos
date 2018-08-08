import * as React from 'react';
import {OrganisationContainer} from '../OrganisationContainer/OrganisationContainer';
import {SidebarContainer} from '../SidebarContainer/SidebarContainer';
import {Redirect, Route, Switch} from 'react-router';
import {Config} from '../../config';
import {EmptyView} from '../../components/EmptyView/EmptyView.sfc';

export const RootContainer = () =>
    (
        <>
            <Switch>

                <Route path={Config.Routes.Organisation}
                       component={OrganisationContainer}
                />

                <Route exact path={Config.Routes.Home}>
                    <Redirect to={Config.Routes.DefaultOrganisation}/>
                </Route>

                <Route component={EmptyView}
                />

            </Switch>


        </>

    );
