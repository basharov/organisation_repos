import * as React from 'react';
import {Component} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {RouteComponentProps, Switch} from 'react-router';
import {IRootActions} from '../../actions/IRootActions';
import {OrganisationContainer} from '../OrganisationContainer/OrganisationContainer';
import {ICombinedState} from 'src/interfaces/ICombinedState';
import {LocationDescriptorObject} from 'history';
import {Config} from '../../config';

export interface IOrganisationReposAppProps extends RouteComponentProps<any> {
    data: ICombinedState;
    actions: IRootActions;
}

export class RootContainer extends Component<IOrganisationReposAppProps> {
    public render () {

        return (
            <>


                <Switch>

                    <Route path='/org/:organisationId'
                           component={OrganisationContainer}
                    />

                    <Route exact path={'/'}>
                        <Redirect to={this.getRedirectLocation()}/>
                    </Route>

                    <Route render={() =>
                        <div>Empty Container</div>}
                    />

                </Switch>

            </>
        );
    }

    private getRedirectLocation (): LocationDescriptorObject {
        const loc: LocationDescriptorObject = {
            pathname: `/org/${Config.DefaultOrganisationId}`,
            state: {
                view: 'OrganisationRoute',
                organisationId: Config.DefaultOrganisationId
            }
        };

        return loc;
    }
}
