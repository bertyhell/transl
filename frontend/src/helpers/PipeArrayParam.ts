import { isArray } from 'lodash-es';

export const PipeArrayParam = {
  decode: (value: string | (string | null)[] | null | undefined): string[] | undefined => {
    try {
      if (!value) {
        return [];
      }
      if (isArray(value)) {
        return value as string[];
      }
      return value.split('|');
    } catch (err) {
      return;
    }
  },
  encode: (value: string[] | undefined) => {
    if (!value) {
      return;
    }
    return value.join('|');
  },
};
