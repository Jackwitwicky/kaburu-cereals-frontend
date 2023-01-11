import { snakeCase } from 'change-case';

export default function snakeReplacer(key, value) {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    const replacement = {};

    for (const k in value) {
      if (k === '_destroy') {
        replacement[k] = value[k];
      } else if (Object.hasOwnProperty.call(value, k)) {
        replacement[k && snakeCase(k)] = value[k];
      }
    }

    return replacement;
  }

  return value;
}
