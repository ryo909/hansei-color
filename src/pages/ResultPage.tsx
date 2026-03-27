import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionBlock } from '../components/layout/SectionBlock';
import { RelatedTypesSection } from '../components/sections/RelatedTypesSection';
import { ResultActions } from '../components/sections/ResultActions';
import { ResultHero } from '../components/sections/ResultHero';
import { ResultSummary } from '../components/sections/ResultSummary';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { SecondaryButton } from '../components/ui/SecondaryButton';
import { diagnosisTypeMap } from '../data/types';
import { clearDiagnosisResult } from '../features/diagnosis/diagnosisStorage';
import { buildLineShareUrl, buildTypeShareUrl, buildXShareUrl } from '../features/share/shareHelpers';
import { buildLineShareText, buildXShareText } from '../features/share/shareText';
import { usePageMeta } from '../hooks/usePageMeta';
import { useResult } from '../hooks/useResult';
import { getSiteUrl, siteMeta } from '../lib/siteMeta';
import { buildTypeCssVars } from '../styles/theme';

export function ResultPage() {
  const navigate = useNavigate();
  const { type } = useResult();

  usePageMeta({
    title: type ? `診断結果：${type.name}｜反省の色診断` : '診断結果｜反省の色診断',
    description: type?.content.resultMemo ?? siteMeta.defaultDescription,
    url: type ? getSiteUrl(`types/${type.slug}`) : getSiteUrl('result'),
    canonical: type ? getSiteUrl(`types/${type.slug}`) : getSiteUrl(),
  });

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
  const shareTargetUrl = buildTypeShareUrl(type);
  const xShareUrl = buildXShareUrl(buildXShareText(type), shareTargetUrl);
  const lineShareUrl = buildLineShareUrl(buildLineShareText(type), shareTargetUrl);

  return (
    <PageContainer className="page-container--result" style={buildTypeCssVars(type.palette)}>
      <ResultHero type={type} />
      <ResultSummary type={type} />
      <ResultActions
        type={type}
        xShareUrl={xShareUrl}
        lineShareUrl={lineShareUrl}
        onRetake={() => {
          clearDiagnosisResult();
          navigate('/diagnosis');
        }}
      />
      <RelatedTypesSection items={relatedTypes} />
      <SectionBlock className="types-jump-card">
        <h2 className="section-card__title">他の反省色も見る</h2>
        <p className="section-card__description">16タイプ全体を眺めると、この結果の癖がどこにあるか比較しやすくなります。</p>
        <SecondaryButton to="/types" fullWidth>
          他の反省色も見る
        </SecondaryButton>
      </SectionBlock>
    </PageContainer>
  );
}
