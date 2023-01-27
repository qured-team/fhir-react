export const formatDate = (date, locale, includeMinutes) => {
  const rawDate = new Date(date);
  return rawDate.toLocaleDateString(locale, whichOptions(date, includeMinutes));
};

const whichOptions = (date, includeMinutes) => {
  const YEAR_FORMAT = 'YYYY';
  const YEAR_MONTH_FORMAT = 'YYYY-MM';

  if (date.length === YEAR_FORMAT.length) {
    return { year: 'numeric', timeZone: 'UTC' };
  }
  if (date.length <= YEAR_MONTH_FORMAT.length) {
    return {
      year: 'numeric',
      month: 'long',
      timeZone: 'UTC',
    };
  }
  if (includeMinutes) {
    return {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC',
    };
  }

  return {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  };
};
