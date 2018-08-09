import {fetchData} from './fetchData';
import {IPagedQueryParams} from 'src/interfaces/IPagedQueryParams';
import {Config} from 'src/config';
import {CacheService} from 'src/services/CacheService';
import {IDataResponse} from '../../../interfaces/IDataResponse';

export const fetchPagedData = async <T> (url: string, cacheKey: string): Promise<IDataResponse<T[]>> => {

    const promises: Array<Promise<any>> = [];
    let dataList: T[] = [];

    const initialUrlWithParams = buildUrlWithParams(url, {page: 1});


    const cachedData = CacheService.getData<T>(cacheKey);
    if (cachedData !== undefined) {
        return cachedData;
    }

    const result = await fetchData<T>(initialUrlWithParams);
    const lastPage = result.paging && result.paging.last ? Number(result.paging.last.page) : 0;

    if (result.data) {
        dataList = dataList.concat(result.data);
    }


    for (let pageToFetch = 2; pageToFetch <= lastPage; pageToFetch += 1) {
        promises.push(fetchData(buildUrlWithParams(url, {page: pageToFetch})));
    }


    const results = await Promise.all(promises);

    let limits = result.limits;

    let paging = result.paging;

    results.forEach((res) => {
        limits = res.limits;
        paging = res.paging;
        dataList = dataList.concat(res.data);
    });

    CacheService.saveData(cacheKey, dataList);

    console.log(results)
    console.log(limits)


    return {
        data: dataList,
        limits: limits,
        paging: paging,
        isCached: false
    };


};

const buildUrlWithParams = (url: string, queryParams: IPagedQueryParams) => {

    const params = new URLSearchParams({
        page: queryParams.page.toString(),
        per_page: Config.ResultsPerPage.toString()
    });

    const paramsString = params.toString();

    return `${url}${paramsString ? `?${paramsString}` : ''}`;
};
