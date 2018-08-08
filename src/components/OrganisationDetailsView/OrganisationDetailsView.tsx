import * as React from 'react';
import {Component} from 'react';
import {OrganisationDetailsViewArea, OrganisationLogo} from './OrganisationDetailsView.style';
import {IOrganisationDetailsViewData} from './interfaces/IOrganisationDetailsViewData';

export interface IOrganisationDetailsViewProps {
    data: IOrganisationDetailsViewData;
    // actions: IOrganisationDetailsViewActions;
}

export class OrganisationDetailsView extends Component<IOrganisationDetailsViewProps> {
    public props: IOrganisationDetailsViewProps;

    public render () {

        const {organisationInfo} = this.props.data;

        return (
            <OrganisationDetailsViewArea>
                <OrganisationLogo
                    src={organisationInfo.avatar_url}
                    alt={organisationInfo.name}
                />

                <p>{organisationInfo.name}</p>
                <p>{organisationInfo.description}</p>


            </OrganisationDetailsViewArea>
        );
    }
}
