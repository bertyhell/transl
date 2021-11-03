export function $t(key: string, props: Record<string, string | number> = {}): string {
  let text = key;
  Object.keys(props).forEach(propName => {
    text = text.replace(new RegExp(`\\{${propName}\\}`), String(props[propName]));
  });
  return text; // TODO add internationalisation
}
