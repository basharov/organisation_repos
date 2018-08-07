import {IRepo} from 'src/interfaces/IRepo';

export interface ISidebarViewData {
    organisationId: string;
    repos: IRepo[];
}
