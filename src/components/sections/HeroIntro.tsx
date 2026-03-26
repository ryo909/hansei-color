import { PrimaryButton } from '../ui/PrimaryButton';
import { InfoLabel } from '../ui/InfoLabel';

export function HeroIntro() {
  return (
    <section className="hero-card">
      <div className="hero-card__content">
        <InfoLabel>全12問 / 1〜2分 / 16タイプ</InfoLabel>
        <h1 className="hero-card__title">反省の色診断</h1>
        <p className="hero-card__lead">
          反省しているつもりでも、見えている色は別かもしれません。
        </p>
        <p className="hero-card__sublead">
          この診断は、反省の出方を勝手に観測するネタ診断です。
        </p>
        <div className="hero-card__actions">
          <PrimaryButton to="/diagnosis" fullWidth>
            診断をはじめる
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
