import * as React from 'react';
import {Component} from 'react';
import {Config} from '../../config';
import {IOrganisationSelectorData} from './interfaces/IOrganisationSelectorData';

import {history} from 'src/store/store';

interface IOrganisationSelectorProps {
    data: IOrganisationSelectorData;
    // actions: IOrganisationSelectorActions;
}

export interface IHeaderState {
}

export class OrganisationSelector extends Component<IOrganisationSelectorProps, IHeaderState> {
    public props: IOrganisationSelectorProps;

    public render () {

        return (
            <>
                <label htmlFor='organisaton-selector'>Organisation:</label>
                <select
                    name='organisaton-selector'
                    id='organisaton-selector'
                    value={this.props.data.organisationId}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                        history.push(`/org/${event.target.value}`, {
                            view: `OrganisationRoute`,
                            organisationId: event.target.value
                        });
                    }}
                >
                    {getOrganisationsOptions()}
                </select>
            </>
        );
    }
}

const getOrganisationsOptions = () => {
    return Object.keys(Config.Organisations).map((organisationId: string) => {
        return <option key={organisationId} value={organisationId}>{Config.Organisations[organisationId]}</option>;
    });
};
