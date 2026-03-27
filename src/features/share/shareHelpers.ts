import { DiagnosisType } from '../../data/types';

const FALLBACK_ORIGIN = 'https://ryo909.github.io';

function getOrigin() {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }

  return FALLBACK_ORIGIN;
}

function trimLeadingSlash(value: string) {
  return value.replace(/^\/+/, '');
}

export function buildAppUrl(path = '') {
  const baseUrl = new URL(import.meta.env.BASE_URL, `${getOrigin()}/`);

  if (!path) {
    return baseUrl.toString();
  }

  return new URL(trimLeadingSlash(path), baseUrl).toString();
}

export function buildTypeShareUrl(type: DiagnosisType) {
  return buildAppUrl(`types/${type.slug}`);
}

export function buildXShareUrl(text: string, url: string) {
  const params = new URLSearchParams({
    text,
    url,
  });

  return `https://x.com/intent/post?${params.toString()}`;
}

export function buildLineShareUrl(text: string, url: string) {
  return `https://line.me/R/msg/text/?${encodeURIComponent(`${text}\n${url}`)}`;
}
