import { DiagnosisType } from '../../data/types';

export function buildShareText(type: DiagnosisType) {
  return [
    '【反省の色診断】',
    `あなたの反省の色は「${type.name}」`,
    type.content.catchCopy,
    '#反省の色診断',
  ].join('\n');
}
