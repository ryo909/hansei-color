import { PageContainer } from '../components/layout/PageContainer';
import { SectionBlock } from '../components/layout/SectionBlock';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { SecondaryButton } from '../components/ui/SecondaryButton';
import { usePageMeta } from '../hooks/usePageMeta';
import { getSiteUrl } from '../lib/siteMeta';

export function NotFoundPage() {
  usePageMeta({
    title: 'ページが見つかりません｜反省の色診断',
    description: 'URLが変わったか、存在しないページです。トップまたは16タイプ一覧へ戻ってください。',
    url: getSiteUrl(),
    canonical: getSiteUrl(),
    robots: 'noindex,follow',
  });

  return (
    <PageContainer className="page-container--center">
      <SectionBlock title="ページが見つからない">
        <p>URLが変わったか、まだ観測されていないページです。</p>
        <PrimaryButton to="/" fullWidth>
          トップへ戻る
        </PrimaryButton>
        <SecondaryButton to="/types" fullWidth>
          16タイプ一覧を見る
        </SecondaryButton>
      </SectionBlock>
    </PageContainer>
  );
}
