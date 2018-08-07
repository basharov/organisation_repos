import * as React from 'react';
import {SFC} from 'react';
import {Link} from 'react-router-dom';
import {HeaderViewArea, LeftSide, RightSide} from './HeaderView.style';
import {OrganisationSelector} from '../OrganisationSelector/OrganisationSelector';
import {IHeaderViewData} from './interfaces/IHeaderViewData';
import {IHeaderViewActions} from './interfaces/IHeaderViewActions';

interface IHeaderViewProps {
    data: IHeaderViewData;
    actions: IHeaderViewActions;
}

export const HeaderView: SFC<IHeaderViewProps> = (props) => {

    const {organisationId} = props.data;

    return (
        <HeaderViewArea>

            <LeftSide>
                <Link to='/'>Repos on GitHub</Link>
            </LeftSide>

            <RightSide>

                <OrganisationSelector
                    data={{organisationId}}
                />

            </RightSide>

        </HeaderViewArea>
    );
};
