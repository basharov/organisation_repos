import * as React from 'react';
import {Component} from 'react';
import {OrganisationDetailsViewArea} from './OrganisationDetailsView.style';
import {IOrganisationDetailsViewData} from './interfaces/IOrganisationDetailsViewData';
import {IOrganisationDetailsViewActions} from './interfaces/IOrganisationDetailsViewActions';

export interface IOrganisationDetailsViewProps {
    data: IOrganisationDetailsViewData;
    actions: IOrganisationDetailsViewActions;
}

export class OrganisationDetailsView extends Component<IOrganisationDetailsViewProps> {
    public readonly props: IOrganisationDetailsViewProps;

    public render () {

        return (
            <OrganisationDetailsViewArea>
                Organisation details
                {
                    /*
                                        this.props.isLoading
                                            ?
                                            <div>spinner</div>
                                            :
                                            <>
                                                <h1>Project Details</h1>
                                            </>
                    */
                }


            </OrganisationDetailsViewArea>
        );
    }
}
