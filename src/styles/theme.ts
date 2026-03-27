import type { CSSProperties } from 'react';
import type { BaseGroup, TypeId } from '../data/types';

export interface TypePalette {
  base: string;
  light: string;
  dark: string;
}

export const uiTheme = {
  ink: '#111111',
  inkSoft: '#333333',
  inkMuted: '#666666',
  paper: '#f5f5f2',
  paperMuted: '#ebebea',
  surface: '#ffffff',
  border: '#e0e0dc',
  yellow: '#ffd600',
} as const;

export const groupColorMap: Record<BaseGroup, { soft: string; solid: string; text: string }> = {
  purple: {
    soft: '#f8eaf3',
    solid: '#d63483',
    text: '#8e1f58',
  },
  blue: {
    soft: '#e6f7f9',
    solid: '#0aafbe',
    text: '#006270',
  },
  gold: {
    soft: '#f7efdf',
    solid: '#c79a3a',
    text: '#81611c',
  },
  gray: {
    soft: '#efefeb',
    solid: '#7d8189',
    text: '#4b4e56',
  },
};

export const typePaletteMap: Record<TypeId, TypePalette> = {
  purple_dense_vivid: {
    base: '#d63483',
    light: '#fde6f1',
    dark: '#8e1f58',
  },
  purple_dense_muted: {
    base: '#9f7ab6',
    light: '#f3ecf8',
    dark: '#6f4f86',
  },
  purple_light_vivid: {
    base: '#ee6cab',
    light: '#fde7f2',
    dark: '#b23c74',
  },
  purple_light_muted: {
    base: '#c8899d',
    light: '#faedef',
    dark: '#8a5367',
  },
  blue_dense_vivid: {
    base: '#0aafbe',
    light: '#e0f7fa',
    dark: '#006270',
  },
  blue_dense_muted: {
    base: '#3d628e',
    light: '#e8eef6',
    dark: '#223b5a',
  },
  blue_light_vivid: {
    base: '#4cc8a5',
    light: '#e4faf3',
    dark: '#1d7f69',
  },
  blue_light_muted: {
    base: '#7ba7c8',
    light: '#eef5fb',
    dark: '#466d8f',
  },
  gold_dense_vivid: {
    base: '#c99a1a',
    light: '#fcf1cf',
    dark: '#7b5b05',
  },
  gold_dense_muted: {
    base: '#a58247',
    light: '#f3ebdc',
    dark: '#6d5225',
  },
  gold_light_vivid: {
    base: '#e8892e',
    light: '#fdebdd',
    dark: '#9d5410',
  },
  gold_light_muted: {
    base: '#c79a3a',
    light: '#f8f0de',
    dark: '#81611c',
  },
  gray_dense_vivid: {
    base: '#2b2b31',
    light: '#e9e9ed',
    dark: '#111217',
  },
  gray_dense_muted: {
    base: '#7d8189',
    light: '#f1f2f4',
    dark: '#4b4e56',
  },
  gray_light_vivid: {
    base: '#c8cbcf',
    light: '#fafaf8',
    dark: '#71757b',
  },
  gray_light_muted: {
    base: '#c6a97a',
    light: '#f5eee3',
    dark: '#7a5e34',
  },
};

export const typeAccentMap: Record<TypeId, string> = Object.fromEntries(
  Object.entries(typePaletteMap).map(([typeId, palette]) => [typeId, palette.base]),
) as Record<TypeId, string>;

export function buildTypeCssVars(palette: TypePalette) {
  return {
    '--type-base': palette.base,
    '--type-light': palette.light,
    '--type-dark': palette.dark,
  } as CSSProperties;
}
