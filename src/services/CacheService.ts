const dataCache: { [key: string]: any } = {};


export const CacheService = {
    getData: <T> (cacheKey: string) => {
        return dataCache[cacheKey];
    },
    saveData: <T> (cacheKey: string, data: T) => {
        dataCache[cacheKey] = data;
        console.log(dataCache);
    }
};
