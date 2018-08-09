import {fetchData} from './fetchData';
import {IPagedQueryParams} from 'src/interfaces/IPagedQueryParams';
import {Config} from 'src/config';
import {CacheService} from 'src/services/CacheService';

export const fetchPagedData = async <T> (url: string, cacheKey: string) => {

    const promises: Array<Promise<any>> = [];
    let dataList: T[] = [];

    const initialUrlWithParams = buildUrlWithParams(url, {page: 1});


    const cachedRepos = CacheService.getData<T>(cacheKey);
    if (cachedRepos !== undefined) {
        return cachedRepos;
    }

    const {data, paging} = await fetchData<T>(initialUrlWithParams);

    const lastPage = paging && paging.last ? Number(paging.last.page) : 0;

    dataList = dataList.concat(data);


    for (let pageToFetch = 2; pageToFetch <= lastPage; pageToFetch += 1) {
        promises.push(fetchData(buildUrlWithParams(url, {page: pageToFetch})));
    }

    const results = await Promise.all(promises);

    results.forEach((res) => {
        dataList = dataList.concat(res.data);
    });


    CacheService.saveData(cacheKey, dataList);

    return dataList;

};

const buildUrlWithParams = (url: string, queryParams: IPagedQueryParams) => {

    const params = new URLSearchParams({
        page: queryParams.page.toString(),
        per_page: Config.ResultsPerPage.toString()
    });

    const paramsString = params.toString();

    return `${url}${paramsString ? `?${paramsString}` : ''}`;
};
