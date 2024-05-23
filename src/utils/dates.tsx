import { format as formatDateFns, formatDistanceToNow as formatDistanceToNowFns } from 'date-fns';
import { es } from 'date-fns/locale';

const supportsDateStringFormat = (date: string) => !Number.isNaN(new Date(date).getTime());

const replaceHyphensWithSlashes = (input?: Date | string | number | null) =>
  typeof input === 'string' ? input.replace(/-/g, '/') : input;

/**
 * Check if date string is supported by the browser. For example:
 * Browser Safari version < 16 does not support string dates with hyphens like 'dd-MM-yyyy'.
 * If input not a string then return original value.
 * LINK: https://stackoverflow.com/questions/4310953/invalid-date-in-safari
 */
export const getValidDateString = (input?: Date | string | number | null) => {
  return typeof input === 'string' && !supportsDateStringFormat(input)
    ? replaceHyphensWithSlashes(input)
    : input;
};

export const formatDate = (
  date: Parameters<typeof formatDateFns>[0],
  format?: Parameters<typeof formatDateFns>[1],
  options?: Parameters<typeof formatDateFns>[2]
) => {
  return formatDateFns(date, format || 'd MMMM Y HH:mm', { locale: es, ...options });
};

export const formatDistanceToNow = (
  date: Parameters<typeof formatDistanceToNowFns>[0],
  options?: Parameters<typeof formatDistanceToNowFns>[1]
) => {
  return formatDistanceToNowFns(date, { locale: es, ...options });
};
