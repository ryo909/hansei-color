const SITE_NAME = '反省の色診断';
const SITE_ORIGIN = 'https://ryo909.github.io';
const SITE_BASE_PATH = '/hansei-color/';
const DEFAULT_TITLE = '反省の色診断｜あなたの反省、何色に見えていますか？';
const DEFAULT_DESCRIPTION =
  '12問でわかる、あなたの反省の色。16タイプのネタ診断アプリ「反省の色診断」。結果名は強いのに、詳細を読むと妙に解像度が高い。';
const OGP_DESCRIPTION =
  '「反省の色が見えない」を本当に診断にしたネタ診断アプリ。12問で、あなたの反省が16タイプの色に分かれます。';
const OGP_IMAGE_PATH = 'ogp-default.svg';

function trimLeadingSlash(value: string) {
  return value.replace(/^\/+/, '');
}

export function getSiteUrl(path = '') {
  const baseUrl = new URL(SITE_BASE_PATH, `${SITE_ORIGIN}/`);

  if (!path) {
    return baseUrl.toString();
  }

  return new URL(trimLeadingSlash(path), baseUrl).toString();
}

export const siteMeta = {
  siteName: SITE_NAME,
  siteOrigin: SITE_ORIGIN,
  siteBasePath: SITE_BASE_PATH,
  defaultTitle: DEFAULT_TITLE,
  defaultDescription: DEFAULT_DESCRIPTION,
  ogTitle: DEFAULT_TITLE,
  ogDescription: OGP_DESCRIPTION,
  ogImageUrl: getSiteUrl(OGP_IMAGE_PATH),
  defaultUrl: getSiteUrl(),
  themeColor: '#111111',
} as const;
