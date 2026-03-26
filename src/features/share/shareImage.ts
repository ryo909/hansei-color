import { DiagnosisType } from '../../data/types';
import { typeAccentMap } from '../../styles/theme';

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function buildBar(y: number, label: string, score: number, fill: string) {
  const width = (score / 100) * 660;
  return `
    <text x="84" y="${y}" font-size="28" fill="#42506a" font-family="sans-serif">${escapeXml(label)}</text>
    <rect x="360" y="${y - 24}" rx="18" ry="18" width="660" height="28" fill="#edf1f8" />
    <rect x="360" y="${y - 24}" rx="18" ry="18" width="${width}" height="28" fill="${fill}" />
    <text x="1048" y="${y}" font-size="28" text-anchor="end" fill="#42506a" font-family="sans-serif">${score}</text>
  `;
}

export function buildShareImageSvg(type: DiagnosisType) {
  const accent = typeAccentMap[type.id] ?? '#2f5bd2';
  const bars = [
    buildBar(630, '謝意', type.metrics.apology, accent),
    buildBar(700, '保身', type.metrics.selfProtection, accent),
    buildBar(770, '説明欲', type.metrics.explanation, accent),
    buildBar(840, '熱量', type.metrics.heat, accent),
    buildBar(910, '改善意欲', type.metrics.improvement, accent),
  ].join('');

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080">
      <rect width="1080" height="1080" fill="#f5f7fb" />
      <rect x="48" y="48" width="984" height="984" rx="44" fill="#ffffff" stroke="#dbe3f0" stroke-width="3" />
      <text x="84" y="130" font-size="34" fill="#5a6a87" font-family="sans-serif">反省の色診断</text>
      <text x="84" y="220" font-size="38" fill="#20304d" font-family="sans-serif">あなたの反省の色は</text>
      <text x="84" y="330" font-size="76" font-weight="700" fill="${accent}" font-family="sans-serif">${escapeXml(type.name)}</text>
      <text x="84" y="410" font-size="34" fill="#364561" font-family="sans-serif">${escapeXml(type.content.catchCopy)}</text>
      <text x="84" y="515" font-size="30" fill="#5a6a87" font-family="sans-serif">成分表</text>
      ${bars}
      <text x="84" y="1000" font-size="34" fill="#5a6a87" font-family="sans-serif">#反省の色診断</text>
    </svg>
  `;
}

export function downloadShareImage(type: DiagnosisType) {
  if (typeof window === 'undefined') {
    return;
  }

  const svg = buildShareImageSvg(type);
  const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `${type.slug}-share.svg`;
  anchor.click();
  URL.revokeObjectURL(url);
}
