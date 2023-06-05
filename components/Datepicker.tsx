import React, { forwardRef, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import generateDate from '@/services/generateDate';

import ru from 'date-fns/locale/ru';

const Datepicker = ({ setTargetDayHandler }: any) => {
  registerLocale('ru', ru);
  const today = new Date();
  const [startDate, setStartDate] = useState<Date | null>(today);
  setTargetDayHandler(startDate);
  return (
    <DatePicker
      locale="ru"
      dateFormat="dd.MM.yyyy"
      selected={startDate}
      value={generateDate(today, startDate)}
      isClearable
      onChange={setStartDate}
      minDate={today}
      todayButton={'Сегодня'}
      className="bg-inherit outline-none p-1 cursor-pointer border border-slate-700 rounded-md"
      wrapperClassName="w-auto"
    />
  );
};

export default Datepicker;
