import {IRateLimits} from './IRateLimits';

export interface IPage {
    page: string;
    per_page: string;
    rel: 'first' | 'next' | 'last';
    url: string;
}

export interface IPaging {
    first?: IPage;
    next?: IPage;
    last?: IPage;
}

export interface IDataResponse<T> {
    data: T;
    limits: IRateLimits;
    paging: IPaging | null;
}
