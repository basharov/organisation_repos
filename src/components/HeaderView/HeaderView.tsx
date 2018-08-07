import * as React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';
import {IHeaderActions} from '../../actions/IHeaderActions';
import {HeaderViewArea, LeftSide, RightSide} from './HeaderView.style';
import {OrganisationSelector} from '../OrganisationSelector/OrganisationSelector';

interface IHeaderProps extends RouteComponentProps<any> {
    data: any;
    actions: IHeaderActions;
}

export interface IHeaderState {
}

export class HeaderView extends Component<IHeaderProps, IHeaderState> {
    public props: IHeaderProps;

    public render () {

        return (
            <HeaderViewArea>

                <LeftSide>
                    <Link to='/'>Projects on GitHub</Link>
                </LeftSide>

                <RightSide>
                    <OrganisationSelector data={null} actions={null}/>
                </RightSide>

            </HeaderViewArea>
        );
    }
}
