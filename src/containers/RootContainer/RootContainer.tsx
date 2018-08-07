import * as React from 'react';
import {Component} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {RouteComponentProps, Switch} from 'react-router';
import {IRootActions} from '../../actions/IRootActions';
import {OrganisationContainer} from '../OrganisationContainer/OrganisationContainer';
import {HeaderContainer} from '../HeaderContainer/HeaderContainer';
import {ICombinedState} from 'src/interfaces/ICombinedState';
import {LocationDescriptorObject} from 'history';


export interface IFacebookProjectsAppProps extends RouteComponentProps<any> {
    data: ICombinedState;
    actions: IRootActions;
}

export class RootContainer extends Component<IFacebookProjectsAppProps> {
    public render () {
        console.log(this.props.location.state)
        return (
            <>

                <HeaderContainer/>

                <Switch>

                    <Route exact path={'/'}>
                        <Redirect to={this.getRedirectLocation()}/>
                    </Route>

                    <Route path='/org/:organisationid'
                           component={OrganisationContainer}
                    />

                    <Route render={() =>
                        <div>Empty Container</div>}
                    />
                </Switch>

            </>
        );
    }

    private getRedirectLocation (): LocationDescriptorObject {
        const loc: LocationDescriptorObject = {
            pathname: `/org/facebook`,
            state: {view: 'OrganisationRoute'}
        };

        return loc;
    }
}
