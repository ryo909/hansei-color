import { DiagnosisType } from '../../data/types';
import { SectionBlock } from '../layout/SectionBlock';
import { MetricBars } from '../ui/MetricBars';

interface MetricsSectionProps {
  type: DiagnosisType;
}

export function MetricsSection({ type }: MetricsSectionProps) {
  return (
    <SectionBlock title="反省成分表">
      <MetricBars type={type} />
    </SectionBlock>
  );
}
