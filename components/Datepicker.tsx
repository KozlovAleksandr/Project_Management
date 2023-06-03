import React, { forwardRef, useState } from 'react';
import DatePicker, {
  ReactDatePickerProps,
  registerLocale,
} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';

import { BsCalendar3 } from 'react-icons/bs';

interface Props extends Omit<ReactDatePickerProps, 'onChange'> {
  onClick?(): void;
  onChange?(): void;
}

const Custom = ({
  value,
  onClick,
  ...rest
}: {
  value: Date | null;
  onClick: any;
}) => {
  return <button value={value} onClick={onClick} {...rest} />;
};

const Datepicker = ({ onClick, onChange, ...rest }: Props) => {
  registerLocale('ru', ru);
  //   const [startDate, setStartDate] = useState(new Date());
  //   return (
  //     <DatePicker
  //       locale="ru"
  //       //   isClearable
  //       dateFormat="dd.MM.yyyy"
  //       selected={startDate}
  //       minDate={new Date()}
  //       onChange={(date) => setStartDate(date)}
  //       className="bg-inherit outline-none p-1 cursor-pointer"
  //     />
  //   );
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  // const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
  //   <button
  //     className="w-32 h-10 bg-[#31333e] rounded-md px-3 border-0 outline-0 appearance-none text-center cursor-pointer"
  //     onClick={onClick}
  //     ref={ref}
  //   >
  //     {value}
  //   </button>
  // ));
  return (
    <DatePicker
      locale="ru"
      selected={startDate}
      isClearable
      dateFormat="dd.MM.yyyy"
      onChange={(date) => setStartDate(date)}
      customInput={
        <Custom value={startDate} onClick={onClick} onChange={onChange} />
      }
    />
  );
};

export default Datepicker;
