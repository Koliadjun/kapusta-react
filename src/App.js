import React, { useState, useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ReportPage from './view/ReportPage/ReportPage';
import MainPage from './view/MainPage/MainPage';

function App() {
  const [balance, setBalance] = useState(0);
  // const [modal, setModal] = useState(true);
  const [modal, setModal] = useState(false);

  //DatePicker

  const [date, setDate] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  function onSelectedDate({ selectedDay, selectedMonth, selectedYear }) {
    // setDate(selectedDay);
    setMonth(selectedMonth);
    setYear(selectedYear);
  }

  console.log('current__date', date);
  console.log('current__month', month);
  console.log('current__year', year);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/report"
            element={
              <ReportPage
                modal={modal}
                balance={balance}
                setBalance={setBalance}
                name={'report'}
                date={date}
                setDate={setDate}
                month={month}
                setMonth={setMonth}
                year={year}
                setYear={setYear}
              />
            }
          />
          <Route
            path="/"
            element={
              <MainPage
                modal={modal}
                setModal={setModal}
                balance={balance}
                setBalance={setBalance}
                name={'main'}
                date={date}
                month={month}
                year={year}
                onSelectedDate={onSelectedDate}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
