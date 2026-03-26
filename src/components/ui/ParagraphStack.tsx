import { splitParagraphs } from '../../lib/utils';
import { buildClassName } from '../../lib/utils';

interface ParagraphStackProps {
  text: string;
  className?: string;
}

export function ParagraphStack({ text, className }: ParagraphStackProps) {
  const paragraphs = splitParagraphs(text);

  return (
    <div className={buildClassName('paragraph-stack', className)}>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}
