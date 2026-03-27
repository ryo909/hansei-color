import { DiagnosisType } from '../../data/types';

const SHARE_HASHTAG = '#反省の色診断';

function getShareLine(type: DiagnosisType) {
  return type.content.shareLine || type.content.resultMemo;
}

export function buildXShareText(type: DiagnosisType) {
  return [
    `私の反省の色は「${type.name}」でした。`,
    getShareLine(type),
    SHARE_HASHTAG,
  ].join('\n');
}

export function buildLineShareText(type: DiagnosisType) {
  return [
    `私の反省の色は「${type.name}」でした。`,
    getShareLine(type),
  ].join('\n');
}

export function buildShareText(type: DiagnosisType, url?: string) {
  return [
    `私の反省の色は「${type.name}」でした。`,
    getShareLine(type),
    SHARE_HASHTAG,
    url,
  ]
    .filter(Boolean)
    .join('\n');
}
