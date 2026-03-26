import { SectionBlock } from '../layout/SectionBlock';

interface TypeSummarySectionProps {
  text: string;
}

export function TypeSummarySection({ text }: TypeSummarySectionProps) {
  return (
    <SectionBlock title="タイプ要約">
      <p>{text}</p>
    </SectionBlock>
  );
}
