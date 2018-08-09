import * as React from 'react';
import {Component} from 'react';
import {Config} from 'src/config';
import {IOrganisationSelectorViewData} from './interfaces/IOrganisationSelectorViewData';

import {history} from 'src/store/store';
import {LightLabel} from './OrganisationSelectorView.style';

interface IOrganisationSelectorViewProps {
    data: IOrganisationSelectorViewData;
    // actions: IOrganisationSelectorActions;
}

export interface IHeaderState {
}

export class OrganisationSelectorView extends Component<IOrganisationSelectorViewProps, IHeaderState> {
    public props: IOrganisationSelectorViewProps;

    public render () {

        return (
            <>
                <LightLabel htmlFor='organisaton-selector'>Organisation:</LightLabel>
                <select
                    name='organisaton-selector'
                    id='organisaton-selector'
                    value={this.props.data.organisationId}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                        history.push(`/org/${event.target.value}`, {
                            view: 'OrganisationRoute',
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
