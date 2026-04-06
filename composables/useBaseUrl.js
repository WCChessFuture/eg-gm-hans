export function useBaseUrl() {
  const config = useRuntimeConfig()
  const base = config.app?.baseURL || '/'

  function assetUrl(path) {
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    return `${cleanBase}${cleanPath}`
  }

  return { base, assetUrl }
}
