import { useMemo } from 'react';
import { diagnosisSlugMap } from '../data/types';

export function useTypeDetail(slug?: string) {
  return useMemo(() => {
    if (!slug) {
      return null;
    }

    return diagnosisSlugMap[slug] ?? null;
  }, [slug]);
}
