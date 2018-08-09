const dataCache: { [key: string]: any } = {};


export const CacheService = {
    getData: <T> (cacheKey: string) => {
        return dataCache[cacheKey]
            ?
            {
                data: dataCache[cacheKey],
                isCached: true
            }
            :
            undefined;
    },
    saveData: <T> (cacheKey: string, data: T) => {
        dataCache[cacheKey] = data;
    }
};
