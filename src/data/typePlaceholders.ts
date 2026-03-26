import { TYPE_META_MAP } from './typeNameMap';
import { FINAL_TYPE_CONTENTS, FINAL_TYPE_METRICS } from './typeFinalContent';
import { BaseGroup, Density, TypeContent, TypeId, TypeMetrics, Vividness } from './types';

interface TypeSeed {
  groupVoice: string;
  socialTexture: string;
  selfFocus: string;
  densityLabel: string;
  vividnessLabel: string;
  openingWord: string;
  heatWord: string;
}

const groupSeeds: Record<BaseGroup, Omit<TypeSeed, 'densityLabel' | 'vividnessLabel'>> = {
  purple: {
    groupVoice: '感情や空気の温度が先ににじむ',
    socialTexture: 'しおらしさと感情の発色が見えやすい',
    selfFocus: 'まず申し訳なさや気まずさが自分の中で広がる',
    openingWord: '空気を感じてしまう',
    heatWord: '温度感',
  },
  blue: {
    groupVoice: '説明と整合性を優先して組み立てる',
    socialTexture: '冷静さと理屈の順番が先に見える',
    selfFocus: '何をどの順で説明すべきかを先に考える',
    openingWord: 'まず整理したい',
    heatWord: '輪郭',
  },
  gold: {
    groupVoice: '自分の立場や事情も同時に守ろうとする',
    socialTexture: '反省の中に主張や防御が混ざって見えやすい',
    selfFocus: '納得していない点や背景事情も置き去りにしたくない',
    openingWord: '一方的には飲み込みたくない',
    heatWord: '主張',
  },
  gray: {
    groupVoice: '空気を荒立てずに静かに着地させようとする',
    socialTexture: '低刺激で無難に見える代わりに温度が読みにくい',
    selfFocus: 'まず場を終わらせることを優先しやすい',
    openingWord: '波風なく済ませたい',
    heatWord: '静けさ',
  },
};

const densityCopy: Record<Density, { label: string; nuance: string; trace: string }> = {
  dense: {
    label: '濃い',
    nuance: '反省の気配が場にも本人の中にも長めに残る',
    trace: 'あとからも空気に残響がある',
  },
  light: {
    label: '薄い',
    nuance: '反応はするが、比較的すばやく薄まっていく',
    trace: 'その場を越えると輪郭が軽くなる',
  },
};

const vividnessCopy: Record<Vividness, { label: string; nuance: string; trace: string }> = {
  vivid: {
    label: '鮮やか',
    nuance: '見え方の輪郭がはっきりしていて印象に残りやすい',
    trace: '出方が強く、第三者にも認識されやすい',
  },
  muted: {
    label: 'くすみ',
    nuance: '出方がやわらかく、輪郭がにじんで見えやすい',
    trace: '見えてはいるが、空気に溶け込む',
  },
};

const typeMetrics: Record<TypeId, TypeMetrics> = {
  purple_dense_vivid: { apology: 80, selfProtection: 60, explanation: 40, heat: 100, improvement: 60 },
  purple_dense_muted: { apology: 80, selfProtection: 40, explanation: 40, heat: 80, improvement: 80 },
  purple_light_vivid: { apology: 60, selfProtection: 40, explanation: 40, heat: 80, improvement: 60 },
  purple_light_muted: { apology: 40, selfProtection: 60, explanation: 20, heat: 40, improvement: 40 },
  blue_dense_vivid: { apology: 60, selfProtection: 80, explanation: 100, heat: 40, improvement: 60 },
  blue_dense_muted: { apology: 60, selfProtection: 60, explanation: 100, heat: 20, improvement: 80 },
  blue_light_vivid: { apology: 40, selfProtection: 60, explanation: 80, heat: 40, improvement: 40 },
  blue_light_muted: { apology: 40, selfProtection: 40, explanation: 60, heat: 20, improvement: 40 },
  gold_dense_vivid: { apology: 40, selfProtection: 100, explanation: 80, heat: 80, improvement: 40 },
  gold_dense_muted: { apology: 60, selfProtection: 80, explanation: 60, heat: 60, improvement: 60 },
  gold_light_vivid: { apology: 40, selfProtection: 80, explanation: 60, heat: 80, improvement: 40 },
  gold_light_muted: { apology: 40, selfProtection: 80, explanation: 80, heat: 40, improvement: 40 },
  gray_dense_vivid: { apology: 60, selfProtection: 40, explanation: 20, heat: 80, improvement: 60 },
  gray_dense_muted: { apology: 40, selfProtection: 60, explanation: 40, heat: 40, improvement: 40 },
  gray_light_vivid: { apology: 60, selfProtection: 20, explanation: 20, heat: 40, improvement: 60 },
  gray_light_muted: { apology: 40, selfProtection: 20, explanation: 20, heat: 20, improvement: 40 },
};

const catchCopyMap: Record<TypeId, string> = {
  purple_dense_vivid: '反省より先に、感情の火花が観測されやすいタイプ。',
  purple_dense_muted: 'しおらかに見えるのに、余韻だけはしっかり残るタイプ。',
  purple_light_vivid: 'ちゃんと謝っているのに、軽やかすぎて印象が先に走るタイプ。',
  purple_light_muted: '見た目は反省色でも、中身の温度が読まれにくいタイプ。',
  blue_dense_vivid: '説明が鮮明すぎて、まず免責が届いてしまうタイプ。',
  blue_dense_muted: '整いすぎた謝罪が、テンプレ感として残りやすいタイプ。',
  blue_light_vivid: '反応は早いが、現場対応感が前に出やすいタイプ。',
  blue_light_muted: '低温で青ざめつつ、痕跡は静かに薄れていくタイプ。',
  gold_dense_vivid: '反省会では達者だが、主張の輪郭もかなり強いタイプ。',
  gold_dense_muted: 'やらかしの自覚と事情説明が、同時に居座るタイプ。',
  gold_light_vivid: 'でもそれ、が先に見えてしまうオレンジなタイプ。',
  gold_light_muted: '予防線の張り方が丁寧すぎて、反省が後ろに下がるタイプ。',
  gray_dense_vivid: '言葉少なでも、無言の圧だけは濃く残るタイプ。',
  gray_dense_muted: '静かなのに、まだ言いたい空気だけが残りやすいタイプ。',
  gray_light_vivid: 'お辞儀は綺麗でも、温度はさっと通り過ぎるタイプ。',
  gray_light_muted: '穏便さを優先しすぎて、色がベージュに溶けるタイプ。',
};

const relatedMap: Record<TypeId, TypeId[]> = {
  purple_dense_vivid: ['gold_dense_vivid', 'purple_dense_muted', 'gray_dense_vivid'],
  purple_dense_muted: ['purple_dense_vivid', 'gray_dense_muted', 'purple_light_muted'],
  purple_light_vivid: ['purple_light_muted', 'blue_light_vivid', 'gray_light_vivid'],
  purple_light_muted: ['gray_light_muted', 'purple_light_vivid', 'blue_light_muted'],
  blue_dense_vivid: ['blue_dense_muted', 'gold_dense_vivid', 'blue_light_vivid'],
  blue_dense_muted: ['blue_dense_vivid', 'gray_light_muted', 'blue_light_muted'],
  blue_light_vivid: ['blue_light_muted', 'purple_light_vivid', 'gold_light_vivid'],
  blue_light_muted: ['blue_dense_muted', 'gray_light_vivid', 'purple_light_muted'],
  gold_dense_vivid: ['gold_dense_muted', 'purple_dense_vivid', 'blue_dense_vivid'],
  gold_dense_muted: ['gold_dense_vivid', 'gray_dense_muted', 'gold_light_muted'],
  gold_light_vivid: ['gold_light_muted', 'blue_light_vivid', 'purple_light_vivid'],
  gold_light_muted: ['gold_light_vivid', 'gray_light_muted', 'blue_dense_muted'],
  gray_dense_vivid: ['gray_dense_muted', 'purple_dense_vivid', 'gray_light_vivid'],
  gray_dense_muted: ['gray_dense_vivid', 'gold_dense_muted', 'gray_light_muted'],
  gray_light_vivid: ['gray_light_muted', 'purple_light_vivid', 'blue_light_muted'],
  gray_light_muted: ['gray_light_vivid', 'purple_light_muted', 'gold_light_muted'],
};

function parseTypeId(typeId: TypeId) {
  const [group, density, vividness] = typeId.split('_') as [BaseGroup, Density, Vividness];
  return { group, density, vividness };
}

function buildContent(typeId: TypeId): TypeContent {
  const { group, density, vividness } = parseTypeId(typeId);
  const meta = TYPE_META_MAP[typeId];
  const base = groupSeeds[group];
  const densityTone = densityCopy[density];
  const vividTone = vividnessCopy[vividness];

  return {
    catchCopy: catchCopyMap[typeId],
    intro:
      `${meta.name}は、${base.groupVoice}タイプです。` +
      `${densityTone.nuance}質感と、${vividTone.nuance}輪郭が組み合わさることで、` +
      `反省しているはずなのに別の色も同時に観測されやすくなります。`,
    overview:
      `${meta.name}の人は、${base.selfFocus}傾向があります。` +
      `${base.socialTexture}ため、本人の意図と周囲の受け取りに微妙なズレが生まれやすいのが特徴です。` +
      `${densityTone.trace}、しかも${vividTone.trace}ので、短い反応でもキャラクターが立ちやすい色です。`,
    readingPoints: [
      `${base.heatWord}がどこで先に見えるかを観測すると、このタイプらしさが出やすいです。`,
      `${densityTone.label}寄りなので、反省の痕跡がどれくらい残るかに注目すると読み取りやすくなります。`,
      `${vividTone.label}寄りの出方があるため、言葉より空気感の印象が先に固定されることがあります。`,
    ],
    firstVoiceSamples: [
      `「${base.openingWord}のは本当なんです。」`,
      `「まずはすみません。ただ、${base.heatWord}の出方が少し独特です。」`,
      `「落ち着いて見えるかもしれませんが、内側ではかなり${densityTone.label}に残っています。」`,
    ],
    opening:
      `${meta.name}は、最初の一言に${base.heatWord}の癖が混ざりやすいタイプです。` +
      `謝罪の出だしそのものは成立していても、後ろにこの色らしい輪郭が自然に続いてきます。`,
    innerSubtitles: [
      `「反省していないわけではない。むしろ${base.selfFocus}。」`,
      `「今の見え方で、また別の誤解が増えないかが気になる。」`,
      `「ちゃんと謝るほど、この色の癖も一緒に出てしまう。」`,
    ],
    innerProcess:
      `${meta.name}の内面では、${base.selfFocus}感覚が先に立ち上がりやすいです。` +
      `そのうえで、${densityTone.label}な残り方と${vividTone.label}な輪郭が、周囲の印象を少しずつ固定していきます。`,
    observedBehaviors: [
      `最初のひと言に、${base.heatWord}か事情説明の癖がにじみやすい。`,
      `${densityTone.label}寄りのため、その場を離れても印象が少し残る。`,
      `${vividTone.label}寄りの輪郭で、周囲が「この人っぽい反省」と認識しやすい。`,
      `本人は修正しているつもりでも、外からは別の色名で呼ばれがち。`,
    ],
    behaviorTraits:
      `${meta.name}は、反省そのものより出方のバランスで読まれるタイプです。` +
      `本人の意図と、相手が最初に受け取る印象のズレが面白さになります。`,
    othersView: {
      friend: `友達視点では、「わかりやすいし人間味はあるけど、素直さ以外の色も混ざる」と見られやすいです。`,
      boss: `上司視点では、「意図は理解できるが、受け手が拾う印象管理まで含めて改善余地がある」と読まれやすいです。`,
      stranger: `初対面視点では、短い反応だけで${meta.name}らしいキャラが立つぶん、誤読も早いタイプです。`,
    },
    meetingPresence: [
      `反省会では、場の流れを見ながらも自分の色味を消し切れません。`,
      `謝意だけでなく、${base.heatWord}や事情の輪郭も一緒に卓上へ出ます。`,
      `静かにしていても、${densityTone.label}な残り方で存在感が続くことがあります。`,
    ],
    misunderstandingFromSelf:
      `${meta.name}本人としては、自然に反省しているだけのつもりです。` +
      `ただ、その自然な出方がこの色特有の見え方を作ります。`,
    misunderstandingFromOthers:
      `周囲には、謝意と別の色味が同時に見えやすくなります。` +
      `それがこの診断名として観測されるポイントです。`,
    misunderstandingPoint:
      `${meta.name}が誤解されやすいのは、反省している量そのものより、出方の配色が強く見えるからです。` +
      `本人にとっては自然な反応でも、周囲には別の意図まで載って見えやすくなります。`,
    reasonForGap:
      `ズレが生まれる理由は、本人が管理しているのは「気持ち」や「説明」でも、周囲が受け取るのは最初に見えた${base.heatWord}だからです。` +
      `その差が、ネタ診断としての色名に変換されます。`,
    summary:
      `${meta.name}は、${base.groupVoice}ベースに、${densityTone.label}さと${vividTone.label}さが重なったタイプです。` +
      `反省しているのに別の色まで見える、そのズレがいちばん面白く出やすい配色といえます。`,
    relatedTypeGroups: [
      {
        title: '関連タイプ',
        items: relatedMap[typeId],
      },
    ],
    relatedTypes: relatedMap[typeId],
  };
}

const placeholderContents: Record<TypeId, TypeContent> = Object.keys(TYPE_META_MAP).reduce(
  (accumulator, typeId) => {
    const typedId = typeId as TypeId;
    accumulator[typedId] = buildContent(typedId);
    return accumulator;
  },
  {} as Record<TypeId, TypeContent>,
);

export const TYPE_PLACEHOLDERS: Record<TypeId, TypeContent> = {
  ...placeholderContents,
  ...FINAL_TYPE_CONTENTS,
} as Record<TypeId, TypeContent>;

export const TYPE_METRICS_MAP: Record<TypeId, TypeMetrics> = {
  ...typeMetrics,
  ...FINAL_TYPE_METRICS,
} as Record<TypeId, TypeMetrics>;
