import { camelCase } from 'change-case';

export default function camelReplacer(key, value) {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    const replacement = {};

    for (const k in value) {
      if (Object.hasOwnProperty.call(value, k)) {
        replacement[k && camelCase(k)] = value[k];
      }
    }

    return replacement;
  }

  return value;
}
