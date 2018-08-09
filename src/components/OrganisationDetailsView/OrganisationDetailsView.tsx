import * as React from 'react';
import {OrganisationDetailsViewArea, OrganisationLogo} from './OrganisationDetailsView.style';
import {Spinner} from '../Spinner/Spinner.sfc';
import {IOrganisationInfo} from 'src/interfaces/IOrganisationInfo';
import {IOrganisationDetailsViewData} from './interfaces/IOrganisationDetailsViewData';

export interface IOrganisationDetailsViewProps {
    data: IOrganisationDetailsViewData;
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
