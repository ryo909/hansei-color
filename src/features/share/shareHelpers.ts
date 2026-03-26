export async function copyText(text: string) {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  return false;
}

export async function tryNativeShare(text: string) {
  if (typeof navigator !== 'undefined' && navigator.share) {
    await navigator.share({
      text,
    });
    return true;
  }

  return false;
}
