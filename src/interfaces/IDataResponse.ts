import {IRateLimits} from './IRateLimits';

export interface IDataResponse<T> {
    data: T;
    limits: IRateLimits;
}
