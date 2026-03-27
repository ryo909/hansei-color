import { SectionBlock } from '../layout/SectionBlock';

interface TypeSummarySectionProps {
  text: string;
}

export function TypeSummarySection({ text }: TypeSummarySectionProps) {
  return (
    <SectionBlock title="タイプ要約" className="type-summary-section">
      <p>{text}</p>
    </SectionBlock>
  );
}
