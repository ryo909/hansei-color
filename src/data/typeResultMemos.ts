import type { TypeId } from './types';

export const TYPE_COPY_PATCH: Record<
  TypeId,
  {
    resultMemo: string;
    shareLine: string;
  }
> = {
  purple_dense_vivid: {
    resultMemo:
      '反省していないわけではないのに、謝意より先に感情の熱が見えやすい。 その結果、反省の場にいるはずなのに“応戦モード”として受け取られやすい色です。',
    shareLine:
      '謝る場に来ているはずなのに、なぜか先に反発の火力が見えやすいらしい。',
  },

  purple_dense_muted: {
    resultMemo:
      '反省の気持ちはあるのに、まず届くのは中身より“しおらしさの完成度”になりやすい。 その上品さが、誠実さにも演出にも見えうる色です。',
    shareLine:
      '反省より先に“しおらしさの完成度”が見えやすいらしい。',
  },

  purple_light_vivid: {
    resultMemo:
      '謝ってはいるのに、その謝意が軽くやわらかく届きやすい。 悪意はないのに、受け手によっては“本気度が薄い”と誤読されやすい色です。',
    shareLine:
      'ちゃんと謝っているつもりでも、少し軽く見えやすいらしい。',
  },

  purple_light_muted: {
    resultMemo:
      '反省しているようには見える。しかもかなり綺麗に見える。 ただ、その美しさが先に立つぶん、中身より“整った見え方”として残りやすい色です。',
    shareLine:
      '反省の中身より、整った見え方のほうが先に残りやすいらしい。',
  },

  blue_dense_vivid: {
    resultMemo:
      '謝っていないわけではないのに、相手からは“先に責任整理を始めた人”に見えやすい。 誠実さのつもりが、予防線として受け取られやすい色です。',
    shareLine:
      '謝意より先に、責任整理の輪郭が見えやすいらしい。',
  },

  blue_dense_muted: {
    resultMemo:
      '謝罪の型は押さえているのに、温度より“ちゃんとしている感”が先に伝わりやすい。 そのため誠実でも、少し定型文っぽく残りやすい色です。',
    shareLine:
      'ちゃんとしているのに、少しテンプレっぽく見えやすいらしい。',
  },

  blue_light_vivid: {
    resultMemo:
      '空気を悪化させない能力はあるのに、改善より“ひとまず収める力”が強く見えやすい。 その軽やかさが、器用さにも先送りにも見える色です。',
    shareLine:
      '収めるのはうまいけど、根本解決は別に見えやすいらしい。',
  },

  blue_light_muted: {
    resultMemo:
      '反省の気配はあるのに、まず伝わるのは謝意より“やばさを察して青ざめている感じ”。 焦りや困惑が先に見えやすい色です。',
    shareLine:
      '反省より先に、“やばい”の顔色が見えやすいらしい。',
  },

  gold_dense_vivid: {
    resultMemo:
      '振り返りも言語化も立派なのに、実行より“総括のうまさ”が先に印象に残りやすい。 反省会では強いが、その先は別評価になりやすい色です。',
    shareLine:
      '反省会では優秀なのに、その先は別問題に見えやすいらしい。',
  },

  gold_dense_muted: {
    resultMemo:
      'やらかした自覚も申し訳なさもあるのに、まず見えるのは“しまった感”の濃さ。 謝意よりもダメージの大きさが前に出やすい色です。',
    shareLine:
      '謝る前に“やってしまった感”の濃さが見えやすいらしい。',
  },

  gold_light_vivid: {
    resultMemo:
      '謝る気持ちはある。あるのだが、その謝罪には毎回うっすら“とはいえこっちにも言い分はある”が同伴しやすい。 完全降伏にはならない色です。',
    shareLine:
      '謝る気持ちはあるのに、毎回うっすら言い分が同伴しやすいらしい。',
  },

  gold_light_muted: {
    resultMemo:
      '責められる前に整えておきたい気持ちが強く、謝意より先に“備え”が見えやすい。 慎重さが、用意周到な保身として残りやすい色です。',
    shareLine:
      '謝る前に、予防線の施工が始まりやすいらしい。',
  },

  gray_dense_vivid: {
    resultMemo:
      '多くを語らないのに、反省の場では妙に温度と圧だけが残りやすい。 静かだから穏やか、とは限らないことを教えてくる色です。',
    shareLine:
      '言葉は少ないのに、妙に圧だけは残りやすいらしい。',
  },

  gray_dense_muted: {
    resultMemo:
      '謝る流れには入っている。入っているのに、心のどこかで“いや、でもまだ一個だけ言わせて”が消えにくい。 完全には閉じない色です。',
    shareLine:
      '謝罪の流れにはいるのに、“まだ一個だけ言いたい”が残りやすいらしい。',
  },

  gray_light_vivid: {
    resultMemo:
      '礼儀も所作も整っているのに、その綺麗さが先に届くぶん、気持ちの熱が少し見えにくい。 美しい謝罪ほど、温度不明になりやすい色です。',
    shareLine:
      '所作は完璧なのに、気持ちの熱は少し読みにくいらしい。',
  },

  gray_light_muted: {
    resultMemo:
      '悪化させない力は高いのに、反省よりも“穏便に終わらせたい”が先に見えやすい。 無難であることが、そのまま温度の薄さに見えやすい色です。',
    shareLine:
      '反省より先に、“穏便に閉じたい”が見えやすいらしい。',
  },
};

export const TYPE_RESULT_MEMO_MAP: Record<TypeId, string> = Object.fromEntries(
  Object.entries(TYPE_COPY_PATCH).map(([typeId, copy]) => [typeId, copy.resultMemo]),
) as Record<TypeId, string>;

export const TYPE_SHARE_LINE_MAP: Record<TypeId, string> = Object.fromEntries(
  Object.entries(TYPE_COPY_PATCH).map(([typeId, copy]) => [typeId, copy.shareLine]),
) as Record<TypeId, string>;
