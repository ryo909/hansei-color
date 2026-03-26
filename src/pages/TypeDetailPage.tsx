import { useParams } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { Divider } from '../components/ui/Divider';
import { SecondaryButton } from '../components/ui/SecondaryButton';
import { TextButton } from '../components/ui/TextButton';
import { MetricsSection } from '../components/sections/MetricsSection';
import { MisunderstandingSection } from '../components/sections/MisunderstandingSection';
import { OthersViewSection } from '../components/sections/OthersViewSection';
import { OverviewSection } from '../components/sections/OverviewSection';
import { QuoteListSection } from '../components/sections/QuoteListSection';
import { RelatedTypesSection } from '../components/sections/RelatedTypesSection';
import { TypeHero } from '../components/sections/TypeHero';
import { TypeSummarySection } from '../components/sections/TypeSummarySection';
import { TextSection } from '../components/sections/TextSection';
import { diagnosisTypeMap } from '../data/types';
import { useTypeDetail } from '../hooks/useTypeDetail';
import { NotFoundPage } from './NotFoundPage';

export function TypeDetailPage() {
  const { slug } = useParams();
  const type = useTypeDetail(slug);

  if (!type) {
    return <NotFoundPage />;
  }

  const relatedTypeGroups = type.content.relatedTypeGroups?.map((group) => ({
    title: group.title,
    items: group.items.map((typeId) => diagnosisTypeMap[typeId]),
  }));
  const relatedTypes = type.content.relatedTypes.map((typeId) => diagnosisTypeMap[typeId]);

  return (
    <PageContainer>
      <TextButton to="/result">結果へ戻る</TextButton>
      <TypeHero type={type} />
      <OverviewSection text={type.content.overview} />
      <MetricsSection type={type} />
      <QuoteListSection
        title="読み取りポイント"
        description="まずどこを見ると、この色のクセが読みやすいか。"
        items={type.content.readingPoints}
        variant="plain"
      />
      <QuoteListSection
        title="第一声サンプル"
        description="このタイプの出だしとして混ざりやすい言い回し。"
        items={type.content.firstVoiceSamples}
      />
      <TextSection title="このタイプの出だし" text={type.content.opening} />
      <QuoteListSection
        title="心の中の字幕"
        description="内面の処理順を字幕っぽく読むための仮テキスト。"
        items={type.content.innerSubtitles}
      />
      <TextSection title="内面の処理順" text={type.content.innerProcess} />
      <QuoteListSection
        title="観測された挙動"
        description="挙動の特徴として外側から見えやすいポイント。"
        items={type.content.observedBehaviors}
        variant="plain"
      />
      <TextSection title="挙動の特徴" text={type.content.behaviorTraits} />
      <OthersViewSection views={type.content.othersView} />
      <QuoteListSection title="反省会にいたら" items={type.content.meetingPresence} variant="plain" />
      <MisunderstandingSection
        fromSelf={type.content.misunderstandingFromSelf}
        fromOthers={type.content.misunderstandingFromOthers}
        point={type.content.misunderstandingPoint}
        reason={type.content.reasonForGap}
      />
      <TypeSummarySection text={type.content.summary} />
      <Divider />
      <RelatedTypesSection items={relatedTypes} groups={relatedTypeGroups} />
      <div className="action-grid">
        <SecondaryButton to="/diagnosis" fullWidth>
          再診断する
        </SecondaryButton>
        <SecondaryButton to="/result" fullWidth>
          結果へ戻る
        </SecondaryButton>
      </div>
    </PageContainer>
  );
}
