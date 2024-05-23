import React, { useMemo } from 'react';
import { formatDate, getValidDateString } from 'utils/dates';

export const FormattedDate: React.FC<{
  date?: Date | string | number | null;
  format?: string;
}> = ({ date, format }) => {
  const _date = useMemo(() => getValidDateString(date), [date]);
  const formatted = useMemo(
    () => (_date ? formatDate(new Date(_date), format) : null),
    [_date, format]
  );
  return <>{formatted}</>;
};
