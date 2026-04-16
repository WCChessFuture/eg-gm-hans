export default defineNuxtPlugin(() => {
  const { persistUtmParams, appendUtmToUrl } = useTracking()

  persistUtmParams()

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href*="endgame.ai"]')
    if (!link) return

    const href = link.getAttribute('href')
    if (!href || !href.includes('endgame.ai')) return

    const updatedUrl = appendUtmToUrl(href)
    if (updatedUrl !== href) {
      link.setAttribute('href', updatedUrl)
    }

    if (window.gtag) {
      window.gtag('event', 'outbound_click', {
        link_url: href,
        link_text: link.textContent?.trim().substring(0, 50) || '',
        link_section: link.closest('section')?.id || 'unknown',
        outbound: true,
        transport_type: 'beacon',
      })
    }
  })

  if (window.gtag) {
    window.gtag('event', 'page_loaded', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
      referrer: document.referrer || 'direct',
      hostname: window.location.hostname,
    })
  }
})
