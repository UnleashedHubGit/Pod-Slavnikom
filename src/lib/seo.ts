import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Lightweight, dependency-free per-route metadata.
 *
 * Sets the document title, meta description and document language, and — only
 * when VITE_SITE_URL is configured — a canonical URL built from that base and
 * the current pathname. Without VITE_SITE_URL no canonical is emitted, so we
 * never ship a misleading temporary (e.g. Netlify branch) canonical.
 */

function upsertMeta(name: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string | null) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!href) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function useSeo(title: string, description: string) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;
    upsertMeta('description', description);
    document.documentElement.lang = 'sl';

    const base = import.meta.env.VITE_SITE_URL as string | undefined;
    if (base && base.trim()) {
      upsertCanonical(`${base.trim().replace(/\/+$/, '')}${pathname}`);
    } else {
      upsertCanonical(null);
    }
  }, [title, description, pathname]);
}
