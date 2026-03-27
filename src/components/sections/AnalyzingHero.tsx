interface AnalyzingHeroProps {
  message: string;
}

const loadingTags = ['謝意', '保身', '説明欲', '熱量', '改善意欲'] as const;

export function AnalyzingHero({ message }: AnalyzingHeroProps) {
  return (
    <section className="hero-card hero-card--analyzing hero-card--center">
      <div className="analyzing-ring" aria-hidden="true" />
      <h1 className="hero-card__title">反省色を観測中…</h1>
      <p className="hero-card__sublead">
        {message}
        <br />
        責任範囲の輪郭を検出しています。
      </p>
      <div className="analyzing-tags" aria-label="分析項目">
        {loadingTags.map((tag, index) => (
          <span className={index === 1 ? 'analyzing-tag analyzing-tag--active' : 'analyzing-tag'} key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
