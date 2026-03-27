import { ParagraphStack } from '../ui/ParagraphStack';

interface MisunderstandingCompareCardProps {
  fromSelf?: string;
  fromOthers?: string;
}

export function MisunderstandingCompareCard({
  fromSelf,
  fromOthers,
}: MisunderstandingCompareCardProps) {
  return (
    <div className="misunderstanding-compare">
      {fromSelf ? (
        <article className="mini-card mini-card--muted misunderstanding-compare__card">
          <h3 className="mini-heading">本人のつもり</h3>
          <ParagraphStack text={fromSelf} />
        </article>
      ) : null}
      {fromOthers ? (
        <article className="mini-card mini-card--strong misunderstanding-compare__card">
          <h3 className="mini-heading">でも周囲にはこう見えやすい</h3>
          <ParagraphStack text={fromOthers} />
        </article>
      ) : null}
    </div>
  );
}
