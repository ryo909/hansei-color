import { BaseGroup, TypeId } from '../data/types';

export const uiTheme = {
  surface: '#ffffff',
  background: '#f5f7fb',
  border: '#dbe3f0',
  text: '#172033',
  mutedText: '#55627b',
  accent: '#2f5bd2',
} as const;

export const groupColorMap: Record<BaseGroup, { soft: string; solid: string; text: string }> = {
  purple: {
    soft: '#f8ebff',
    solid: '#b03fd1',
    text: '#7d1ca8',
  },
  blue: {
    soft: '#e7f5ff',
    solid: '#2181b8',
    text: '#0e5a8a',
  },
  gold: {
    soft: '#fff2da',
    solid: '#d18a1e',
    text: '#8b5b11',
  },
  gray: {
    soft: '#f0f2f5',
    solid: '#767f8e',
    text: '#454c57',
  },
};

export const typeAccentMap: Partial<Record<TypeId, string>> = {
  purple_dense_vivid: '#ce3cb0',
  purple_dense_muted: '#b18ac9',
  purple_light_vivid: '#ef77bc',
  purple_light_muted: '#d38faa',
  blue_dense_vivid: '#34b8d8',
  blue_dense_muted: '#305f91',
  blue_light_vivid: '#65d2b8',
  blue_light_muted: '#79abd0',
  gold_dense_vivid: '#d1a520',
  gold_dense_muted: '#a17d3a',
  gold_light_vivid: '#f08f2d',
  gold_light_muted: '#c99742',
  gray_dense_vivid: '#383d46',
  gray_dense_muted: '#7b8189',
  gray_light_vivid: '#e5e8ed',
  gray_light_muted: '#d8c8a3',
};
