import { ParagraphStack } from '../ui/ParagraphStack';
import { SectionBlock } from '../layout/SectionBlock';
import { MisunderstandingCompareCard } from './MisunderstandingCompareCard';

interface MisunderstandingSectionProps {
  fromSelf?: string;
  fromOthers?: string;
  point: string;
  reason: string;
}

export function MisunderstandingSection({
  fromSelf,
  fromOthers,
  point,
  reason,
}: MisunderstandingSectionProps) {
  return (
    <SectionBlock title="この色が誤解されるポイント" className="misunderstanding-section">
      <div className="content-stack">
        {point ? (
          <div className="mini-card mini-card--muted misunderstanding-section__point">
            <h3 className="mini-heading">ズレが見える場所</h3>
            <ParagraphStack text={point} />
          </div>
        ) : null}
        {(fromSelf || fromOthers) ? <MisunderstandingCompareCard fromSelf={fromSelf} fromOthers={fromOthers} /> : null}
        {reason ? (
          <div className="mini-card mini-card--strong misunderstanding-section__reason">
            <h3 className="mini-heading">ズレが生まれる理由</h3>
            <ParagraphStack text={reason} />
          </div>
        ) : null}
      </div>
    </SectionBlock>
  );
}
