function getCache<T>(cacheKey: string): T {
  const cachedData = localStorage.getItem(cacheKey);

  return cachedData ? JSON.parse(cachedData) : ([] as T);
}

function saveCache(cacheKey: string, cacheValue: any) {
  localStorage.setItem(cacheKey, JSON.stringify(cacheValue));
}

function removeCache(cacheKey: string) {
  localStorage.removeItem(cacheKey);
}

export { getCache, saveCache, removeCache };
