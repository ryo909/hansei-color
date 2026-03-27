import { SectionBlock } from '../layout/SectionBlock';
import { ParagraphStack } from '../ui/ParagraphStack';

interface OverviewSectionProps {
  text: string;
}

export function OverviewSection({ text }: OverviewSectionProps) {
  return (
    <SectionBlock title="タイプ概要" className="overview-section">
      <ParagraphStack text={text} />
    </SectionBlock>
  );
}
