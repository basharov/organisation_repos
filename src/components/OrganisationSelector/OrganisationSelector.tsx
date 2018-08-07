import * as React from 'react';
import {Component} from 'react';
import {Config} from '../../config';

interface IOrganisationSelectorProps {
    data: any;
    actions: any;
}

export interface IHeaderState {
}

export class OrganisationSelector extends Component<IOrganisationSelectorProps, IHeaderState> {
    public props: IOrganisationSelectorProps;

    public render () {

        return (
            <>
                <label htmlFor='organisaton-selector'>Organisation:</label>
                <select name='organisaton-selector' id='organisaton-selector'>
                    {getOrganisationsOptions()}
                </select>
            </>
        );
    }
}

const getOrganisationsOptions = () => {
    return Object.keys(Config.Organisations).map((organisationId: string) => {
        return <option key={organisationId} value='organisationId'>{Config.Organisations[organisationId]}</option>;
    });
}
