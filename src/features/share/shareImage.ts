import { DiagnosisType } from '../../data/types';

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function buildMultilineText(
  x: number,
  y: number,
  lines: string[],
  fontSize: number,
  fill: string,
  fontFamily: string,
  fontWeight?: number,
) {
  return `
    <text x="${x}" y="${y}" font-size="${fontSize}" fill="${fill}" font-family="${fontFamily}"${
      fontWeight ? ` font-weight="${fontWeight}"` : ''
    }>
      ${lines
        .map(
          (line, index) =>
            `<tspan x="${x}" dy="${index === 0 ? 0 : fontSize * 1.35}">${escapeXml(line)}</tspan>`,
        )
        .join('')}
    </text>
  `;
}

function wrapText(value: string, maxChars: number) {
  const normalized = value.replaceAll('\n', ' ');
  const lines: string[] = [];

  for (let index = 0; index < normalized.length; index += maxChars) {
    lines.push(normalized.slice(index, index + maxChars));
  }

  return lines;
}

function buildBar(y: number, label: string, score: number, fill: string, track: string, text: string) {
  const width = (score / 100) * 660;
  return `
    <text x="84" y="${y}" font-size="28" fill="${text}" font-family="'BIZ UDPGothic', sans-serif">${escapeXml(label)}</text>
    <rect x="360" y="${y - 24}" rx="18" ry="18" width="660" height="28" fill="${track}" />
    <rect x="360" y="${y - 24}" rx="18" ry="18" width="${width}" height="28" fill="${fill}" />
    <text x="1048" y="${y}" font-size="28" text-anchor="end" fill="#111111" font-family="'BIZ UDPGothic', sans-serif" font-weight="700">${score}</text>
  `;
}

export function buildShareImageSvg(type: DiagnosisType) {
  const { base, light, dark } = type.palette;
  const typeLines = wrapText(type.name, 6);
  const catchLines = wrapText(type.content.catchCopy, 16);
  const bars = [
    buildBar(640, '謝意', type.metrics.apology, base, '#ebebea', '#666666'),
    buildBar(710, '保身', type.metrics.selfProtection, base, '#ebebea', '#666666'),
    buildBar(780, '説明欲', type.metrics.explanation, dark, '#ebebea', '#666666'),
    buildBar(850, '熱量', type.metrics.heat, base, '#ebebea', '#666666'),
    buildBar(920, '改善意欲', type.metrics.improvement, base, '#ebebea', '#666666'),
  ].join('');

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080">
      <rect width="1080" height="1080" fill="#f5f5f2" />
      <rect width="1080" height="18" fill="${base}" />
      <rect x="56" y="56" width="968" height="968" rx="42" fill="#ffffff" />
      <circle cx="160" cy="220" r="48" fill="${base}" />
      <circle cx="160" cy="220" r="72" fill="${base}" opacity="0.15" />
      <text x="84" y="138" font-size="30" fill="${dark}" font-family="'BIZ UDPGothic', sans-serif" letter-spacing="0.16em" font-weight="700">YOUR HANSEI COLOR</text>
      ${buildMultilineText(238, 210, typeLines, 86, '#111111', "'BIZ UDPGothic', sans-serif", 700)}
      <text x="84" y="338" font-size="28" fill="${dark}" font-family="'BIZ UDPGothic', sans-serif" letter-spacing="0.14em" font-weight="700">あなたの反省の色は</text>
      <rect x="84" y="382" width="912" height="150" rx="24" fill="${light}" />
      ${buildMultilineText(116, 440, catchLines, 42, '#333333', "'Noto Serif JP', serif")}
      <text x="84" y="590" font-size="24" fill="#666666" font-family="'BIZ UDPGothic', sans-serif" letter-spacing="0.14em" font-weight="700">反省成分表</text>
      ${bars}
      <text x="84" y="988" font-size="34" fill="${dark}" font-family="'BIZ UDPGothic', sans-serif" font-weight="700">#反省の色診断</text>
      <text x="996" y="988" font-size="26" fill="#666666" text-anchor="end" font-family="'BIZ UDPGothic', sans-serif">反省の色診断</text>
      <rect y="1062" width="1080" height="18" fill="#111111" />
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
