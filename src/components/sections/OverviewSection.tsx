import { SectionBlock } from '../layout/SectionBlock';
import { ParagraphStack } from '../ui/ParagraphStack';

interface OverviewSectionProps {
  text: string;
}

export function OverviewSection({ text }: OverviewSectionProps) {
  return (
    <SectionBlock title="タイプ概要">
      <ParagraphStack text={text} />
    </SectionBlock>
  );
}
