import { TypeId } from './types';

export interface TypeMeta {
  name: string;
  slug: string;
}

export const TYPE_META_MAP: Record<TypeId, TypeMeta> = {
  purple_dense_vivid: { name: '逆ギレマゼンタ', slug: 'gyakugire-magenta' },
  purple_dense_muted: { name: 'しおらしラベンダー', slug: 'shiorashi-lavender' },
  purple_light_vivid: { name: '薄謝りピンク', slug: 'usua-yamari-pink' },
  purple_light_muted: { name: '見た目だけローズ', slug: 'mitamedake-rose' },
  blue_dense_vivid: { name: 'まず免責シアン', slug: 'mazu-menseki-cyan' },
  blue_dense_muted: { name: 'テンプレ謝罪ネイビー', slug: 'template-shazai-navy' },
  blue_light_vivid: { name: 'その場しのぎミント', slug: 'sonoba-shinogi-mint' },
  blue_light_muted: { name: 'とりあえず青ざめブルー', slug: 'toriaezu-aozame-blue' },
  gold_dense_vivid: { name: '反省会だけ達者ゴールド', slug: 'hanseikai-dake-tassha-gold' },
  gold_dense_muted: { name: 'やっちまった黄土色', slug: 'yacchimatta-oudoiro' },
  gold_light_vivid: { name: 'でもそれオレンジ', slug: 'demo-sore-orange' },
  gold_light_muted: { name: '予防線アンバー', slug: 'yobousen-amber' },
  gray_dense_vivid: { name: '無言圧ブラック', slug: 'mugon-atsu-black' },
  gray_dense_muted: { name: 'まだ言いたいグレー', slug: 'mada-iitai-gray' },
  gray_light_vivid: { name: 'お辞儀だけ綺麗ホワイト', slug: 'ojigi-dake-kirei-white' },
  gray_light_muted: { name: '事なかれベージュ', slug: 'kotonakare-beige' },
};

export const TYPE_NAME_MAP: Record<TypeId, string> = Object.fromEntries(
  Object.entries(TYPE_META_MAP).map(([typeId, meta]) => [typeId, meta.name]),
) as Record<TypeId, string>;
