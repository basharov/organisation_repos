import * as React from 'react';
import {OrganisationDetailsViewArea, OrganisationLogo} from './OrganisationDetailsView.style';
import {IOrganisationDetailsViewData} from './interfaces/IOrganisationDetailsViewData';
import {Spinner} from '../Spinner/Spinner.sfc';
import {IOrganisationInfo} from '../../interfaces/IOrganisationInfo';

export interface IOrganisationDetailsViewProps {
    data: IOrganisationDetailsViewData;
    // actions: IOrganisationDetailsViewActions;
}

export const OrganisationDetailsView = (props: IOrganisationDetailsViewProps) => {
    const {organisationInfo} = props.data;

    return (
        <OrganisationDetailsViewArea>
            {
                props.data.isOrganisationDetailsLoading ?
                    <Spinner/> : getOrganisationDetails(props.data.organisationInfo)}


        </OrganisationDetailsViewArea>
    );
};

const getOrganisationDetails = (organisationInfo: IOrganisationInfo) => {
    return (<>
            <OrganisationLogo
                src={organisationInfo.avatar_url}
                alt={organisationInfo.name}
            />

            <p>{organisationInfo.name}</p>
            <p>{organisationInfo.description}</p>

        </>

    );
};
