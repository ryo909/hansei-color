import { SectionBlock } from '../layout/SectionBlock';
import { ParagraphStack } from '../ui/ParagraphStack';

interface TextSectionProps {
  title: string;
  text: string;
}

export function TextSection({ title, text }: TextSectionProps) {
  return (
    <SectionBlock title={title} className="text-section">
      <ParagraphStack text={text} />
    </SectionBlock>
  );
}
