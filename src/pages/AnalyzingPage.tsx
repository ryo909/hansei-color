import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { AnalyzingHero } from '../components/sections/AnalyzingHero';
import { getDiagnosisResult } from '../features/diagnosis/diagnosisStorage';
import { ANALYZING_DELAY_MAX_MS, ANALYZING_DELAY_MIN_MS } from '../lib/constants';
import { randomFrom } from '../lib/utils';

const messages = [
  '謝意と保身の比率を測定しています…',
  '言い訳の透過率を確認しています…',
  '感情の発色を分析しています…',
  '予防線の厚みをスキャンしています…',
  '会議室ベージュの可能性を検証しています…',
];

export function AnalyzingPage() {
  const navigate = useNavigate();
  const [message] = useState(() => randomFrom(messages));

  useEffect(() => {
    const result = getDiagnosisResult();
    if (!result) {
      navigate('/', { replace: true });
      return;
    }

    const delay =
      ANALYZING_DELAY_MIN_MS +
      Math.round(Math.random() * (ANALYZING_DELAY_MAX_MS - ANALYZING_DELAY_MIN_MS));

    const timer = window.setTimeout(() => {
      navigate('/result', { replace: true });
    }, delay);

    return () => window.clearTimeout(timer);
  }, [navigate]);

  return (
    <PageContainer className="page-container--center">
      <AnalyzingHero message={message} />
    </PageContainer>
  );
}
