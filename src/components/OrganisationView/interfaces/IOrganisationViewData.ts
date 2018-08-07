import {IRepo} from 'src/interfaces/IRepo';

export interface IOrganisationViewData {
    organisationId: string;
    repos: IRepo[];
}
