import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';

import { ReactComponent as CalendarIcon } from './calendar.svg';
import styles from './Datepicker.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { transactionOperations } from 'redux/transaction';

registerLocale('ru', ru);

function Datepicker() {
  const storeDate = useSelector(state => state.transaction.date);
  const [selectedDate, setSelectedDate] = useState(storeDate);
  // const selectedDay = selectedDate.getDate();
  // const selectedMonth = selectedDate.getMonth() + 1;
  // const selectedYear = selectedDate.getFullYear();
  const dispatch = useDispatch()

  function handleSelect(date) {
    // setSelectedDate(date);

    dispatch(transactionOperations.setDate(date));
  }
  return (
    <div className={styles.containerDatepicker}>
      <CalendarIcon className={styles.icon} width="20px" height="20px" />
      <div className="">
        <DatePicker
          dateFormat="dd.MM.yyyy"
          selected={selectedDate}
          onSelect={setSelectedDate}
          onChange={handleSelect}
          className={styles.date}
          maxDate={new Date()}
          locale="ru"
        />
      </div>
    </div>
  );
}

export default Datepicker;
