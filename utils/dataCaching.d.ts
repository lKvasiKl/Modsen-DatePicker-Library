declare function getCache<T>(cacheKey: string): T;
declare function saveCache(cacheKey: string, cacheValue: any): void;
declare function removeCache(cacheKey: string): void;
export { getCache, saveCache, removeCache };
