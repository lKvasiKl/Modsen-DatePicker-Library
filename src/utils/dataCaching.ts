function getCache<T>(cacheKey: string): [] {
  const cachedData = localStorage.getItem(cacheKey);

  return cachedData ? JSON.parse(cachedData) : ([] as T);
}

function saveCache(cacheKey: string, cacheValue: unknown) {
  localStorage.setItem(cacheKey, JSON.stringify(cacheValue));
}

function removeCache(cacheKey: string) {
  localStorage.removeItem(cacheKey);
}

export { getCache, saveCache, removeCache };
