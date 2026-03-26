import { DiagnosisResult } from '../../data/types';
import { STORAGE_KEYS } from '../../lib/constants';

export function saveDiagnosisResult(result: DiagnosisResult) {
  if (typeof window === 'undefined') {
    return;
  }

  window.sessionStorage.setItem(STORAGE_KEYS.result, JSON.stringify(result));
}

export function getDiagnosisResult(): DiagnosisResult | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const raw = window.sessionStorage.getItem(STORAGE_KEYS.result);
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as DiagnosisResult;
  } catch {
    return null;
  }
}

export function clearDiagnosisResult() {
  if (typeof window === 'undefined') {
    return;
  }

  window.sessionStorage.removeItem(STORAGE_KEYS.result);
}
