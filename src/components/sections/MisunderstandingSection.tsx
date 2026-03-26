import { ParagraphStack } from '../ui/ParagraphStack';
import { SectionBlock } from '../layout/SectionBlock';

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
    <SectionBlock title="この色が誤解されるポイント">
      <div className="content-stack">
        {fromSelf ? (
          <div>
            <h3 className="mini-heading">本人のつもり</h3>
            <ParagraphStack text={fromSelf} />
          </div>
        ) : null}
        {fromOthers ? (
          <div>
            <h3 className="mini-heading">でも周囲にはこう見えやすい</h3>
            <ParagraphStack text={fromOthers} />
          </div>
        ) : null}
        {point ? (
          <div>
            <h3 className="mini-heading">ズレが見える場所</h3>
            <ParagraphStack text={point} />
          </div>
        ) : null}
        {reason ? (
          <div>
            <h3 className="mini-heading">ズレが生まれる理由</h3>
            <ParagraphStack text={reason} />
          </div>
        ) : null}
      </div>
    </SectionBlock>
  );
}
