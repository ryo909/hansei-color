import { useEffect } from 'react';
import { siteMeta } from '../lib/siteMeta';

interface PageMetaOptions {
  title: string;
  description?: string;
  url?: string;
  canonical?: string;
  robots?: string;
}

function ensureMeta(selector: string, create: () => HTMLElement) {
  const existing = document.head.querySelector(selector);

  if (existing) {
    return existing as HTMLElement;
  }

  const element = create();
  document.head.appendChild(element);
  return element;
}

export function usePageMeta({
  title,
  description = siteMeta.defaultDescription,
  url = siteMeta.defaultUrl,
  canonical = url,
  robots,
}: PageMetaOptions) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const descriptionMeta = ensureMeta('meta[name="description"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      return meta;
    });
    descriptionMeta.setAttribute('content', description);

    const robotsMeta = ensureMeta('meta[name="robots"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'robots');
      return meta;
    });
    robotsMeta.setAttribute('content', robots ?? 'index,follow');

    const canonicalLink = ensureMeta('link[rel="canonical"]', () => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      return link;
    });
    canonicalLink.setAttribute('href', canonical);

    const ogTitleMeta = ensureMeta('meta[property="og:title"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      return meta;
    });
    ogTitleMeta.setAttribute('content', title);

    const ogDescriptionMeta = ensureMeta('meta[property="og:description"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      return meta;
    });
    ogDescriptionMeta.setAttribute('content', description);

    const ogUrlMeta = ensureMeta('meta[property="og:url"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:url');
      return meta;
    });
    ogUrlMeta.setAttribute('content', url);

    const twitterTitleMeta = ensureMeta('meta[name="twitter:title"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'twitter:title');
      return meta;
    });
    twitterTitleMeta.setAttribute('content', title);

    const twitterDescriptionMeta = ensureMeta('meta[name="twitter:description"]', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'twitter:description');
      return meta;
    });
    twitterDescriptionMeta.setAttribute('content', description);

    return () => {
      document.title = previousTitle;
    };
  }, [canonical, description, robots, title, url]);
}
