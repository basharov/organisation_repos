import {IDataResponse} from '../../../interfaces/IDataResponse';
import {getRateLimits} from './getRateLimits';

export const fetchData = async <T> (url: string): Promise<IDataResponse<T>> => {

    const resp = await fetch(url);

    const data = await resp.json();
    const limits = getRateLimits(resp.headers);

    const dataResponse: IDataResponse<T> = {
        data,
        limits
    };

    return Promise.resolve(dataResponse);
};
