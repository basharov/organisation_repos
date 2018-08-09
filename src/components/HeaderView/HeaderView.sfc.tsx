import * as React from 'react';
import {SFC} from 'react';
import {HeaderViewArea, LightLink, LogoArea, OrganisationSelectorArea, RatesLimitsArea} from './HeaderView.style';
import {OrganisationSelectorView} from '../OrganisationSelectorView/OrganisationSelectorView';
import {IHeaderViewData} from './interfaces/IHeaderViewData';
import {IHeaderViewActions} from './interfaces/IHeaderViewActions';
import {RateLimitsView} from '../RateLimitsView/RateLimitsView.sfc';

interface IHeaderViewProps {
    data: IHeaderViewData;
    actions: IHeaderViewActions;
}

export const HeaderView: SFC<IHeaderViewProps> = (props) => {

    const {organisationId, rateLimits} = props.data;

    return (
        <HeaderViewArea>

            <LogoArea>
                <LightLink to={`/org/${props.data.organisationId}`}>Repos on GitHub</LightLink>
            </LogoArea>

            <RatesLimitsArea>
                <RateLimitsView
                    data={{rateLimits}}
                />
            </RatesLimitsArea>

            <OrganisationSelectorArea>

                <OrganisationSelectorView
                    data={{organisationId}}
                />
            </OrganisationSelectorArea>

        </HeaderViewArea>
    );
};
