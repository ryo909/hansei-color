import { SectionBlock } from '../layout/SectionBlock';
import { buildClassName } from '../../lib/utils';

interface QuoteListSectionProps {
  title: string;
  description?: string;
  items: string[];
  variant?: 'quote' | 'plain';
}

export function QuoteListSection({
  title,
  description,
  items,
  variant = 'quote',
}: QuoteListSectionProps) {
  return (
    <SectionBlock
      title={title}
      description={description}
      className={buildClassName('quote-list-section', variant === 'plain' && 'quote-list-section--plain')}
    >
      <ul className={buildClassName('quote-list', variant === 'plain' && 'quote-list--plain')}>
        {items.map((item) => (
          <li key={item}>{variant === 'quote' ? `「${item}」` : item}</li>
        ))}
      </ul>
    </SectionBlock>
  );
}
