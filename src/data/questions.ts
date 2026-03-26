import { BaseGroup, Density, Vividness } from './types';

export interface GroupOption {
  key: string;
  label: string;
  group: BaseGroup;
}

export interface BinaryOption<TValue extends string> {
  key: string;
  label: string;
  value: TValue;
}

export interface GroupQuestion {
  id: `q${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`;
  prompt: string;
  helper?: string;
  weight: 1 | 2;
  options: GroupOption[];
}

export interface DensityQuestion {
  id: 'q9' | 'q10';
  prompt: string;
  options: BinaryOption<Density>[];
}

export interface VividnessQuestion {
  id: 'q11' | 'q12';
  prompt: string;
  options: BinaryOption<Vividness>[];
}

export type DiagnosisQuestion = GroupQuestion | DensityQuestion | VividnessQuestion;

const groupOptions = [
  {
    key: 'purple',
    group: 'purple',
  },
  {
    key: 'blue',
    group: 'blue',
  },
  {
    key: 'gold',
    group: 'gold',
  },
  {
    key: 'gray',
    group: 'gray',
  },
] as const satisfies Array<{ key: string; group: BaseGroup }>;

export const questions: DiagnosisQuestion[] = [
  {
    id: 'q1',
    prompt: '指摘を受けた直後、いちばん先に前へ出やすいのは？',
    weight: 2,
    options: [
      { ...groupOptions[0], label: 'まず空気や気持ちの温度が動く' },
      { ...groupOptions[1], label: 'まず経緯や前提を整理したくなる' },
      { ...groupOptions[2], label: 'まず自分の立場や納得いかなさが気になる' },
      { ...groupOptions[3], label: 'まず波風を立てずに収めたくなる' },
    ],
  },
  {
    id: 'q2',
    prompt: '謝る場で、先に整えたいのはどれに近い？',
    weight: 2,
    options: [
      { ...groupOptions[0], label: '反省している感じが伝わること' },
      { ...groupOptions[1], label: '誤解なく正確に伝わること' },
      { ...groupOptions[2], label: '一方的に悪者になりすぎないこと' },
      { ...groupOptions[3], label: 'その場が無難に着地すること' },
    ],
  },
  {
    id: 'q3',
    prompt: 'やらかした後、自分の中でいちばん気になりやすいのは？',
    weight: 2,
    options: [
      { ...groupOptions[0], label: '気まずさや申し訳なさがにじんでいないか' },
      { ...groupOptions[1], label: '話の順番や説明の正確さが足りているか' },
      { ...groupOptions[2], label: 'こちら側の事情や不服が無視されていないか' },
      { ...groupOptions[3], label: '空気をこれ以上悪くしていないか' },
    ],
  },
  {
    id: 'q4',
    prompt: '謝罪文を書くとき、自然に出だしへ混ざりやすいのは？',
    weight: 2,
    options: [
      { ...groupOptions[0], label: '気持ちや温度感' },
      { ...groupOptions[1], label: '背景や前提の説明' },
      { ...groupOptions[2], label: '但し書きや立場の補足' },
      { ...groupOptions[3], label: '低刺激で無難な着地' },
    ],
  },
  {
    id: 'q5',
    prompt: '周囲から誤解されるとしたら、近いのはどれ？',
    weight: 1,
    options: [
      { ...groupOptions[0], label: '感情が前に出すぎて見える' },
      { ...groupOptions[1], label: '説明が先に立って見える' },
      { ...groupOptions[2], label: '守りや主張が混ざって見える' },
      { ...groupOptions[3], label: '温度が薄く見える' },
    ],
  },
  {
    id: 'q6',
    prompt: '反省会にいたときの自分に近いのは？',
    weight: 1,
    options: [
      { ...groupOptions[0], label: '空気や感情をまとっている人' },
      { ...groupOptions[1], label: '整理して話し始める人' },
      { ...groupOptions[2], label: 'ひと言まだ残っている人' },
      { ...groupOptions[3], label: 'とにかく穏便に終えたい人' },
    ],
  },
  {
    id: 'q7',
    prompt: '「反省している自分」の見え方として近いのは？',
    weight: 1,
    options: [
      { ...groupOptions[0], label: 'しおらしさや雰囲気が先に見える' },
      { ...groupOptions[1], label: '冷静さや整理力が先に見える' },
      { ...groupOptions[2], label: '不服や防御の気配も少し残る' },
      { ...groupOptions[3], label: '無難さや低刺激さが先に見える' },
    ],
  },
  {
    id: 'q8',
    prompt: 'やらかしたあと、自分の中にいちばん残りやすいのは？',
    weight: 1,
    options: [
      { ...groupOptions[0], label: '気まずさや、しょんぼりした感じ' },
      { ...groupOptions[1], label: '何をどう説明すべきかの整理' },
      { ...groupOptions[2], label: 'まだ言いたいことや、納得していない感じ' },
      { ...groupOptions[3], label: 'とにかく穏便に終わらせたい気持ち' },
    ],
  },
  {
    id: 'q9',
    prompt: 'やらかした後のことを、どれくらい引きずりやすい？',
    options: [
      { key: 'dense-1', label: 'かなり長く引きずる。場の空気にも自分の中にも残りやすい', value: 'dense' },
      { key: 'dense-2', label: 'しばらく残る。切り替えようとしても存在感がある', value: 'dense' },
      { key: 'light-1', label: 'その場では反応するが、比較的切り替えは早い', value: 'light' },
      { key: 'light-2', label: '反応はするが、わりとすぐ薄まる', value: 'light' },
    ],
  },
  {
    id: 'q10',
    prompt: '周囲から見たあなたの反応の「残り方」に近いのは？',
    options: [
      { key: 'dense-1', label: '言葉数が少なくても、場に重さとして残りやすい', value: 'dense' },
      { key: 'dense-2', label: '反応がはっきりしていて、あとまで印象に残りやすい', value: 'dense' },
      { key: 'light-1', label: 'その場ではわかるが、あとにはあまり残らない', value: 'light' },
      { key: 'light-2', label: '気づかれはするが、空気になじんで薄まりやすい', value: 'light' },
    ],
  },
  {
    id: 'q11',
    prompt: '反省しているときの「出方」として近いのは？',
    options: [
      { key: 'vivid-1', label: '顔・声・文面に、はっきり強く出る', value: 'vivid' },
      { key: 'vivid-2', label: '出方ははっきりしているが、少し低温で落ち着いている', value: 'vivid' },
      { key: 'muted-1', label: '出てはいるが、やわらかくにじむ感じがある', value: 'muted' },
      { key: 'muted-2', label: 'できるだけ均して、輪郭をぼかしやすい', value: 'muted' },
    ],
  },
  {
    id: 'q12',
    prompt: '謝ったあとの「印象の残り方」として近いのは？',
    options: [
      { key: 'vivid-1', label: '反省していることが、かなりわかりやすく印象に残る', value: 'vivid' },
      { key: 'vivid-2', label: '輪郭は残るが、乾いた・低温な印象として残りやすい', value: 'vivid' },
      { key: 'muted-1', label: '反省は見えるが、ふんわりしていて強くは残らない', value: 'muted' },
      { key: 'muted-2', label: '丁寧ではあるが、印象としてはかなり薄く残る', value: 'muted' },
    ],
  },
];
