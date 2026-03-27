import { BaseGroup } from '../../data/types';
import { TypePalette, groupColorMap } from '../../styles/theme';

interface ColorChipProps {
  group: BaseGroup;
  label: string;
  palette?: TypePalette;
  outlined?: boolean;
}

export function ColorChip({ group, label, palette, outlined }: ColorChipProps) {
  const color = palette
    ? { soft: palette.light, solid: palette.base, text: palette.dark }
    : groupColorMap[group];

  return (
    <span
      className="color-chip"
      style={{
        background: outlined ? '#ffffff' : color.soft,
        color: color.text,
        borderColor: outlined ? color.solid : color.soft,
      }}
    >
      {label}
    </span>
  );
}
