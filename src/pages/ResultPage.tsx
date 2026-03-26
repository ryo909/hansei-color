import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionBlock } from '../components/layout/SectionBlock';
import { RelatedTypesSection } from '../components/sections/RelatedTypesSection';
import { ResultActions } from '../components/sections/ResultActions';
import { ResultHero } from '../components/sections/ResultHero';
import { ResultSummary } from '../components/sections/ResultSummary';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { diagnosisTypeMap } from '../data/types';
import { clearDiagnosisResult } from '../features/diagnosis/diagnosisStorage';
import { downloadShareImage } from '../features/share/shareImage';
import { copyText, tryNativeShare } from '../features/share/shareHelpers';
import { buildShareText } from '../features/share/shareText';
import { useResult } from '../hooks/useResult';

export function ResultPage() {
  const navigate = useNavigate();
  const { type } = useResult();
  const [shareState, setShareState] = useState<string | null>(null);

  if (!type) {
    return (
      <PageContainer>
        <SectionBlock title="結果が見つかりません">
          <p>診断結果が保存されていないため、トップから観測をやり直してください。</p>
          <PrimaryButton to="/diagnosis" fullWidth>
            診断をはじめる
          </PrimaryButton>
        </SectionBlock>
      </PageContainer>
    );
  }

  const relatedTypes = type.content.relatedTypes.map((typeId) => diagnosisTypeMap[typeId]);

  return (
    <PageContainer>
      <ResultHero type={type} />
      <ResultSummary type={type} />
      <SectionBlock title="CTA群" description="まずはコピー、その次に詳細で読み味を深める構成です。">
        <ResultActions
          type={type}
          onCopy={async () => {
            const shareText = buildShareText(type);
            const nativeShared = await tryNativeShare(shareText).catch(() => false);
            if (nativeShared) {
              setShareState('共有シートを開きました。');
              return;
            }

            const copied = await copyText(shareText);
            setShareState(copied ? '投稿文をコピーしました。' : 'コピーに失敗しました。');
          }}
          onShareImage={() => {
            downloadShareImage(type);
            setShareState('シェア画像の土台をSVGで保存しました。');
          }}
          onRetake={() => {
            clearDiagnosisResult();
            navigate('/diagnosis');
          }}
        />
        {shareState ? <p className="notice-text">{shareState}</p> : null}
      </SectionBlock>
      <RelatedTypesSection items={relatedTypes} />
    </PageContainer>
  );
}
