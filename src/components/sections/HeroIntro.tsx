import { PrimaryButton } from '../ui/PrimaryButton';
import { SecondaryButton } from '../ui/SecondaryButton';

export function HeroIntro() {
  return (
    <section className="hero-card hero-card--top">
      <div className="top-hero__main">
        <span className="top-hero__badge">無料診断・全12問</span>
        <h1 className="top-hero__title">
          <span className="top-hero__title-line">
            あなたの<em>反省の色</em>、
          </span>
          <span className="top-hero__title-line">見えていますか？</span>
        </h1>
        <p className="top-hero__lead">
          「謝っているのに伝わらない」
          <br />
          その理由が、16タイプで判明します。
        </p>
      </div>
      <div className="top-hero__cta">
        <div className="top-hero__meta" aria-label="診断情報">
          <span>全12問</span>
          <span>1〜2分</span>
          <span>16タイプ</span>
        </div>
        <div className="top-hero__actions">
          <PrimaryButton to="/diagnosis" fullWidth className="top-hero__button">
            診断をはじめる
          </PrimaryButton>
          <SecondaryButton to="/types" fullWidth className="top-hero__subbutton">
            16タイプ一覧を見る
          </SecondaryButton>
        </div>
        <p className="top-hero__notice">無料・登録不要 / 娯楽目的の診断コンテンツです。</p>
      </div>
      <p className="top-hero__teaser">
        「ちゃんと謝っているつもり」の人ほど、
        <br />
        結果が面白い傾向があります。
      </p>
    </section>
  );
}
