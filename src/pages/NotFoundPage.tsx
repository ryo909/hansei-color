import { PageContainer } from '../components/layout/PageContainer';
import { SectionBlock } from '../components/layout/SectionBlock';
import { PrimaryButton } from '../components/ui/PrimaryButton';

export function NotFoundPage() {
  return (
    <PageContainer className="page-container--center">
      <SectionBlock title="ページが見つからない">
        <p>URLが変わったか、まだ観測されていないページです。</p>
        <PrimaryButton to="/" fullWidth>
          トップへ戻る
        </PrimaryButton>
      </SectionBlock>
    </PageContainer>
  );
}
