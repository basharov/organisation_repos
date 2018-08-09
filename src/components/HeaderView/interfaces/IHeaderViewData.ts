import {IRateLimits} from 'src/interfaces/IRateLimits';

export interface IHeaderViewData {
    organisationId: string;
    rateLimits: IRateLimits;
}
