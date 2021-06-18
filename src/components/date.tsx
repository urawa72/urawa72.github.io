import React from 'react';
import { parseISO, format } from 'date-fns';

const Date: React.VFC<{ dateString: string }> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
};

export default Date;
