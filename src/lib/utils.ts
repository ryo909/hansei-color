export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function toPercent(value: number, max = 5) {
  return `${(clamp(value, 0, max) / max) * 100}%`;
}

export function randomFrom<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

export function buildClassName(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

export function splitParagraphs(text: string) {
  return text
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

export function getFirstParagraph(text: string) {
  return splitParagraphs(text)[0] ?? text;
}
