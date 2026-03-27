import { DiagnosisType } from '../../data/types';
import { toPercent } from '../../lib/utils';
import { buildTypeCssVars } from '../../styles/theme';

interface MetricBarsProps {
  type: DiagnosisType;
}

const metricLabels = [
  { key: 'apology', label: '謝意' },
  { key: 'selfProtection', label: '保身' },
  { key: 'explanation', label: '説明欲' },
  { key: 'heat', label: '熱量' },
  { key: 'improvement', label: '改善意欲' },
] as const;

export function MetricBars({ type }: MetricBarsProps) {
  return (
    <div className="metric-bars" style={buildTypeCssVars(type.palette)}>
      {metricLabels.map((metric) => (
        <div className="metric-row" key={metric.key}>
          <div className="metric-row__header">
            <span className="metric-row__label">{metric.label}</span>
            <strong>{type.metrics[metric.key]}</strong>
          </div>
          <div className="metric-row__track">
            <div
              className="metric-row__fill"
              style={{
                width: toPercent(type.metrics[metric.key], 100),
                background: type.metrics[metric.key] >= 80 ? type.palette.dark : type.palette.base,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
