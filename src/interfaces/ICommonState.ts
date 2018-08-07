import {IRepo} from './IRepo';

export interface ICommonState {
    readonly organisationId: string;
    readonly repos: IRepo[];
}
