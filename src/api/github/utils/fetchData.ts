import {IDataResponse} from '../../../interfaces/IDataResponse';
import {getRateLimits} from './getRateLimits';
import {getPagingInfo} from './getPagingInfo';

export const fetchData = async <T> (url: string): Promise<IDataResponse<T>> => {

    const resp = await fetch(url);
    const data = await resp.json();

    const paging = getPagingInfo(resp.headers);
    const limits = getRateLimits(resp.headers);

    return {
        data,
        limits,
        paging
    };

};
