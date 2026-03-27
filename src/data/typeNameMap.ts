import { TypeId } from './types';

export interface TypeMeta {
  name: string;
  slug: string;
  highlight: string;
}

export const TYPE_META_MAP: Record<TypeId, TypeMeta> = {
  purple_dense_vivid: { name: '逆ギレマゼンタ', slug: 'gyakugire-magenta', highlight: 'マゼンタ' },
  purple_dense_muted: { name: 'しおらしラベンダー', slug: 'shiorashi-lavender', highlight: 'ラベンダー' },
  purple_light_vivid: { name: '薄謝りピンク', slug: 'usua-yamari-pink', highlight: 'ピンク' },
  purple_light_muted: { name: '見た目だけローズ', slug: 'mitamedake-rose', highlight: 'ローズ' },
  blue_dense_vivid: { name: 'まず免責シアン', slug: 'mazu-menseki-cyan', highlight: 'シアン' },
  blue_dense_muted: { name: 'テンプレ謝罪ネイビー', slug: 'template-shazai-navy', highlight: 'ネイビー' },
  blue_light_vivid: { name: 'その場しのぎミント', slug: 'sonoba-shinogi-mint', highlight: 'ミント' },
  blue_light_muted: { name: 'とりあえず青ざめブルー', slug: 'toriaezu-aozame-blue', highlight: 'ブルー' },
  gold_dense_vivid: { name: '反省会だけ達者ゴールド', slug: 'hanseikai-dake-tassha-gold', highlight: 'ゴールド' },
  gold_dense_muted: { name: 'やっちまった黄土色', slug: 'yacchimatta-oudoiro', highlight: '黄土色' },
  gold_light_vivid: { name: 'でもそれオレンジ', slug: 'demo-sore-orange', highlight: 'オレンジ' },
  gold_light_muted: { name: '予防線アンバー', slug: 'yobousen-amber', highlight: 'アンバー' },
  gray_dense_vivid: { name: '無言圧ブラック', slug: 'mugon-atsu-black', highlight: 'ブラック' },
  gray_dense_muted: { name: 'まだ言いたいグレー', slug: 'mada-iitai-gray', highlight: 'グレー' },
  gray_light_vivid: { name: 'お辞儀だけ綺麗ホワイト', slug: 'ojigi-dake-kirei-white', highlight: 'ホワイト' },
  gray_light_muted: { name: '事なかれベージュ', slug: 'kotonakare-beige', highlight: 'ベージュ' },
};

export const TYPE_NAME_MAP: Record<TypeId, string> = Object.fromEntries(
  Object.entries(TYPE_META_MAP).map(([typeId, meta]) => [typeId, meta.name]),
) as Record<TypeId, string>;
