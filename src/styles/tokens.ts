export const uiTokens = {
  color: {
    ink: '#111111',
    inkSoft: '#333333',
    inkMuted: '#666666',
    paper: '#f5f5f2',
    paperMuted: '#ebebea',
    surface: '#ffffff',
    border: '#e0e0dc',
    yellow: '#ffd600',
  },
  radius: {
    xs: '8px',
    sm: '12px',
    md: '18px',
    lg: '28px',
    xl: '40px',
    pill: '999px',
  },
  shadow: {
    card: '0 18px 48px rgba(17, 17, 17, 0.08)',
    hero: '0 24px 64px rgba(17, 17, 17, 0.16)',
  },
  spacing: {
    xxs: '0.25rem',
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  border: {
    thin: '1px solid #e0e0dc',
    strong: '2px solid #111111',
  },
  typography: {
    sans: '"BIZ UDPGothic", "Hiragino Sans", "Yu Gothic", "Noto Sans JP", sans-serif',
    serif: '"Noto Serif JP", "Hiragino Mincho ProN", serif',
    labelSpacing: '0.12em',
  },
} as const;
