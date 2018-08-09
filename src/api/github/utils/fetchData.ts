import {IDataResponse} from 'src/interfaces/IDataResponse';
import {getRateLimits} from './getRateLimits';
import {getPagingInfo} from './getPagingInfo';
import {CacheService} from 'src/services/CacheService';
import {Config} from 'src/config';

export const fetchData = async <T> (url: string, cacheKey?: string): Promise<IDataResponse<T>> => {

    if (cacheKey) {
        const cachedData = CacheService.getData<T>(cacheKey);
        if (cachedData !== undefined) {
            return cachedData;
        }
    }

    const headers = new Headers();

    const resp: Response = await fetch(url, {
        headers: {
            Authorization: `token ${Config.AccessToken}`
        }
    });

    const data = await resp.json();

    const status = resp.status;


    const limits = getRateLimits(resp.headers);

    if (status === 403) {
        return {
            error: data,
            limits,
            isCached: false
        };

    }

    const paging = getPagingInfo(resp.headers);

    if (cacheKey) {
        CacheService.saveData(cacheKey, data);
    }

    return {
        data,
        limits,
        paging,
        isCached: false
    };

};
