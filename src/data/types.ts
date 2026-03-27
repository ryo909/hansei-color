import { TYPE_META_MAP } from './typeNameMap';
import { TYPE_METRICS_MAP, TYPE_PLACEHOLDERS } from './typePlaceholders';
import { TypePalette, typePaletteMap } from '../styles/theme';

export type BaseGroup = 'purple' | 'blue' | 'gold' | 'gray';
export type Density = 'dense' | 'light';
export type Vividness = 'vivid' | 'muted';
export type TypeId =
  | 'purple_dense_vivid'
  | 'purple_dense_muted'
  | 'purple_light_vivid'
  | 'purple_light_muted'
  | 'blue_dense_vivid'
  | 'blue_dense_muted'
  | 'blue_light_vivid'
  | 'blue_light_muted'
  | 'gold_dense_vivid'
  | 'gold_dense_muted'
  | 'gold_light_vivid'
  | 'gold_light_muted'
  | 'gray_dense_vivid'
  | 'gray_dense_muted'
  | 'gray_light_vivid'
  | 'gray_light_muted';

export interface TypeMetrics {
  apology: number;
  selfProtection: number;
  explanation: number;
  heat: number;
  improvement: number;
}

export interface OthersView {
  friend: string;
  boss: string;
  stranger: string;
}

export interface RelatedTypeGroup {
  title: string;
  items: TypeId[];
}

export interface TypeContent {
  catchCopy: string;
  resultMemo: string;
  intro: string;
  overview: string;
  readingPoints: string[];
  firstVoiceSamples: string[];
  opening: string;
  innerSubtitles: string[];
  innerProcess: string;
  observedBehaviors: string[];
  behaviorTraits: string;
  othersView: OthersView;
  meetingPresence: string[];
  misunderstandingFromSelf?: string;
  misunderstandingFromOthers?: string;
  misunderstandingPoint: string;
  reasonForGap: string;
  summary: string;
  relatedTypes: TypeId[];
  relatedTypeGroups?: RelatedTypeGroup[];
}

export interface DiagnosisType {
  id: TypeId;
  slug: string;
  name: string;
  highlight: string;
  group: BaseGroup;
  density: Density;
  vividness: Vividness;
  palette: TypePalette;
  metrics: TypeMetrics;
  content: TypeContent;
}

export interface DiagnosisResult {
  typeId: TypeId;
  answers: Record<string, string>;
  createdAt: string;
}

function parseTypeId(typeId: TypeId) {
  const [group, density, vividness] = typeId.split('_') as [BaseGroup, Density, Vividness];
  return { group, density, vividness };
}

export const diagnosisTypes: DiagnosisType[] = (Object.keys(TYPE_META_MAP) as TypeId[]).map(
  (typeId) => ({
    id: typeId,
    ...TYPE_META_MAP[typeId],
    ...parseTypeId(typeId),
    palette: typePaletteMap[typeId],
    metrics: TYPE_METRICS_MAP[typeId],
    content: TYPE_PLACEHOLDERS[typeId],
  }),
);

export const diagnosisTypeMap: Record<TypeId, DiagnosisType> = Object.fromEntries(
  diagnosisTypes.map((type) => [type.id, type]),
) as Record<TypeId, DiagnosisType>;

export const diagnosisSlugMap: Record<string, DiagnosisType> = Object.fromEntries(
  diagnosisTypes.map((type) => [type.slug, type]),
);
