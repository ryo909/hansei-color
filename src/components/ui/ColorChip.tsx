import { BaseGroup } from '../../data/types';
import { groupColorMap } from '../../styles/theme';

interface ColorChipProps {
  group: BaseGroup;
  label: string;
}

export function ColorChip({ group, label }: ColorChipProps) {
  const color = groupColorMap[group];

  return (
    <span
      className="color-chip"
      style={{
        background: color.soft,
        color: color.text,
        borderColor: color.soft,
      }}
    >
      {label}
    </span>
  );
}
