declare function getCache<T>(cacheKey: string): [];
declare function saveCache(cacheKey: string, cacheValue: unknown): void;
declare function removeCache(cacheKey: string): void;
export { getCache, saveCache, removeCache };
