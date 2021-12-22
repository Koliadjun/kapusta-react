import React, { useState } from 'react';
import {
  Routes,
  Route,
  // Link,
  // Outlet,
  Navigate,
  useNavigate,
} from 'react-router-dom';

import Loader from 'components/Loader';

import MainView from './views/MainView';
import HomeView from './views/HomeView';
import ReportView from './views/ReportView';
import { authOperations, authSelectors } from 'redux/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { transactionOperations } from 'redux/transaction';
function App() {
  const [modal, setModal] = useState(false);
  // const [modalActive, setModalActive] = useState(false);
  // const sendBalance = () => {
  //   setModal(false);
  // };

  // const [balance, setBalance] = useState(0);

  //DatePicker -------------- BEGINNING -----------
  // const [date, setDate] = useState(new Date().getDate());
  // const [month, setMonth] = useState(new Date().getMonth() + 1);
  // const [year, setYear] = useState(new Date().getFullYear());
  // function onSelectedDate({ selectedDay, selectedMonth, selectedYear }) {
  //   setDate(selectedDay);
  //   setMonth(selectedMonth);
  //   setYear(selectedYear);
  // }
  //DatePicker -------------- END-----------

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isFetchingUser = useSelector(authSelectors.getIsFetchingUser);
  const isLoggedin = useSelector(authSelectors.getIsLoggedIn);
  // const isLoggedin = true;
  const isGoogled = useSelector(authSelectors.getIsGoogled);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());

    dispatch(transactionOperations.getAllTransaction(2021));
    if (isGoogled) {
      navigate('/report');
    }
  }, [dispatch, isGoogled, navigate]);

  return isFetchingUser ? (
    <Loader />
  ) : (
    <div>
      <Routes>
        <Route exact path="/" element={<Navigate to="home" />} />
        <Route
          index
          path="home"
          element={
            isLoggedin ? <Navigate replace to="/report" /> : <HomeView />
          }
        />
        <Route exact path="home/:data" element={<HomeView />} />

        <Route
          path="/main"
          element={
            isLoggedin ? (
              <MainView
                name={'main'}
                modal={modal}
                setModal={setModal}
              />
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
        <Route
          path="/report"
          element={
            isLoggedin ? (
              <ReportView
                name={'report'}
                modal={modal}
                setModal={setModal}
              />
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>

  );
}

export default App;
