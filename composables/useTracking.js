export function useTracking() {
  function trackEvent(eventName, params = {}) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, params)
    }
  }

  function trackOutboundClick(url, label) {
    trackEvent('outbound_click', {
      link_url: url,
      link_text: label || '',
      outbound: true,
    })
  }

  function getUtmParams() {
    if (typeof window === 'undefined') return {}
    const params = new URLSearchParams(window.location.search)
    const utms = {}
    for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']) {
      const val = params.get(key)
      if (val) utms[key] = val
    }
    return utms
  }

  function appendUtmToUrl(url) {
    if (typeof window === 'undefined') return url
    const stored = sessionStorage.getItem('eg_utm')
    const utms = stored ? JSON.parse(stored) : getUtmParams()
    if (Object.keys(utms).length === 0) return url
    const u = new URL(url)
    for (const [k, v] of Object.entries(utms)) {
      if (!u.searchParams.has(k)) u.searchParams.set(k, v)
    }
    return u.toString()
  }

  function persistUtmParams() {
    if (typeof window === 'undefined') return
    const utms = getUtmParams()
    if (Object.keys(utms).length > 0) {
      sessionStorage.setItem('eg_utm', JSON.stringify(utms))
    }
  }

  return { trackEvent, trackOutboundClick, getUtmParams, appendUtmToUrl, persistUtmParams }
}
