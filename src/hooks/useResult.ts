import { useMemo } from 'react';
import { diagnosisTypeMap } from '../data/types';
import { getDiagnosisResult } from '../features/diagnosis/diagnosisStorage';

export function useResult() {
  const result = getDiagnosisResult();

  return useMemo(() => {
    const type = result ? diagnosisTypeMap[result.typeId] : null;
    return {
      result,
      type,
    };
  }, [result]);
}
