import { DiagnosisType } from '../../data/types';
import { getSiteUrl } from '../../lib/siteMeta';

export function buildAppUrl(path = '') {
  return getSiteUrl(path);
}

export function buildTypeShareUrl(type: DiagnosisType) {
  return buildAppUrl(`types/${type.slug}`);
}

export function buildXShareUrl(text: string, url: string) {
  const params = new URLSearchParams();

  params.set('text', text);
  params.set('url', url);

  return `https://twitter.com/intent/tweet?${params.toString()}`;
}

export function buildLineShareUrl(text: string, url: string) {
  return `https://line.me/R/msg/text/?${encodeURIComponent(`${text}\n${url}`)}`;
}
