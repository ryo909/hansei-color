import { PageContainer } from '../components/layout/PageContainer';
import { SectionBlock } from '../components/layout/SectionBlock';
import { TypeListSection } from '../components/sections/TypeListSection';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { diagnosisTypes } from '../data/types';
import { usePageMeta } from '../hooks/usePageMeta';
import { getSiteUrl } from '../lib/siteMeta';

const typeGroups = [
  {
    key: 'purple',
    title: '紫・ローズ群',
    description: '感情や雰囲気が前に出やすい反省色',
  },
  {
    key: 'blue',
    title: '青・シアン・ミント群',
    description: '整理や説明、冷静さが先に見えやすい反省色',
  },
  {
    key: 'gold',
    title: '黄土・ゴールド群',
    description: '不服・保身・総括力が混ざりやすい反省色',
  },
  {
    key: 'gray',
    title: 'グレー・ベージュ群',
    description: '低温・無難・静かな圧として見えやすい反省色',
  },
] as const;

export function TypesPage() {
  usePageMeta({
    title: '16タイプ一覧｜反省の色診断',
    description: '16タイプの反省色を一覧で見られるページです。気になるタイプはそのまま詳細ページで読めます。',
    url: getSiteUrl('types'),
  });

  return (
    <PageContainer className="page-container--types">
      <SectionBlock
        title="16タイプ一覧"
        description="あなたの反省は、どの色に近いですか。"
        className="types-hero"
        action={
          <PrimaryButton to="/diagnosis">
            診断してみる
          </PrimaryButton>
        }
      >
        <p>
          「反省の色診断」に登場する16タイプを一覧で見られます。
          <br />
          気になるタイプは、そのまま詳細ページへ進めます。
        </p>
      </SectionBlock>

      {typeGroups.map((group) => (
        <TypeListSection
          key={group.key}
          title={group.title}
          description={group.description}
          items={diagnosisTypes.filter((type) => type.group === group.key)}
        />
      ))}

      <SectionBlock className="types-bottom-cta">
        <h2 className="section-card__title">まだ診断していないなら</h2>
        <p className="section-card__description">
          一覧で気になったあとに診断すると、自分の結果名がより刺さりやすくなります。
        </p>
        <PrimaryButton to="/diagnosis" fullWidth>
          あなたの反省色を診断する
        </PrimaryButton>
      </SectionBlock>
    </PageContainer>
  );
}
