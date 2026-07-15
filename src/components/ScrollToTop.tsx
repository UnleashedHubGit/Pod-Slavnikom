import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Ensures every newly opened route starts at the top, while still allowing
 * in-page hash links (e.g. /sobe/:id#rezervacija) to reach their target.
 *
 * - Disables the browser's automatic scroll restoration so route changes do
 *   not flash the previous page's scroll position before we reset it.
 * - Uses an instant jump for top-of-page navigation to avoid a visible slide.
 * - Smoothly scrolls to a hashed element once it is available in the DOM.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      // The target may mount / reflow (e.g. embeds loading) slightly after the
      // route does, so attempt immediately and then retry for a short window.
      let attempts = 0;
      let timer: ReturnType<typeof setTimeout> | undefined;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
        if (attempts < 30) {
          attempts += 1;
          timer = setTimeout(tryScroll, 100);
        }
      };
      tryScroll();
      return () => clearTimeout(timer);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}
