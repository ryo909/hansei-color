import { PageContainer } from '../components/layout/PageContainer';
import { HeroIntro } from '../components/sections/HeroIntro';
import { TypePreviewList } from '../components/sections/TypePreviewList';
import { diagnosisTypeMap } from '../data/types';

const previewTypeIds = ['blue_dense_vivid', 'purple_dense_vivid', 'gray_light_muted', 'gray_light_vivid'] as const;

export function TopPage() {
  return (
    <PageContainer className="page-container--top">
      <HeroIntro />
      <TypePreviewList items={previewTypeIds.map((typeId) => diagnosisTypeMap[typeId])} />
    </PageContainer>
  );
}
