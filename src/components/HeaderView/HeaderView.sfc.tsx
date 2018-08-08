import * as React from 'react';
import {HeaderViewArea, LeftSide, LightLink, RightSide} from './HeaderView.style';
import {OrganisationSelector} from '../OrganisationSelector/OrganisationSelector';
import {IHeaderViewData} from './interfaces/IHeaderViewData';
import {IHeaderViewActions} from './interfaces/IHeaderViewActions';

interface IHeaderViewProps {
    data: IHeaderViewData;
    actions: IHeaderViewActions;
}

export const HeaderView = (props: IHeaderViewProps) => {

    const {organisationId} = props.data;

    const loc = {
        pathname: `/org/${props.data.organisationId}`,
        state: {view: 'OrganisationRoute', organisationId: props.data.organisationId}
    };

    return (
        <HeaderViewArea>

            <LeftSide>
                <LightLink to={loc}>Repos on GitHub</LightLink>
            </LeftSide>

            <RightSide>

                <OrganisationSelector
                    data={{organisationId}}
                />

            </RightSide>

        </HeaderViewArea>
    );
};
