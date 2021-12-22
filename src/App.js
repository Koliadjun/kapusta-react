import React from 'react';
import {
  Routes,
  Route,
  // Link,
  // Outlet,
  Navigate,
  useNavigate,
} from 'react-router-dom';

import Loader from 'components/Loader';

import CommentView from './views/CommentView';
import ReportView from './views/ReportView/ReportView';
import { authOperations, authSelectors } from 'redux/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from './views/HomePage';
import NotFoundView from './views/NotFoundView/NotFoundView.jsx';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isFetchingUser = useSelector(authSelectors.getIsFetchingUser);
  // const isLoggedin = true
  const isLoggedin = useSelector(authSelectors.getIsLoggedIn);
  const isGoogled = useSelector(authSelectors.getIsGoogled);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    if (isGoogled) {
      navigate('/report');
    }
    console.log("----------")
    // eslint-disable-next-line
  }, [isGoogled]);

  return isFetchingUser ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route exact path="/" element={<Navigate to="home" />} />
        <Route
          index
          path="home"
          element={
            isLoggedin ? <Navigate replace to="/report" /> : <HomePage />
          }
        />
        <Route exact path="home/:data" element={<HomePage />} />
        <Route
          path="comment"
          element={isLoggedin ? <CommentView /> : <Navigate replace to="/" />}
        />
        <Route
          path="report"
          element={isLoggedin ? <ReportView /> : <Navigate replace to="/" />}
        />
        <Route
          path="*"
          element={
            <NotFoundView>
              <Loader />
            </NotFoundView>
          }
        />
      </Routes>
    </>
  );
}

export default App;
// import React, { useState } from 'react';
// import {
//   Routes,
//   Route,
//   // Link,
//   // Outlet,
//   Navigate,
//   useNavigate,
// } from 'react-router-dom';

// import Loader from 'components/Loader';

// import CommentView from './views/CommentView';
// import ReportView from './views/ReportView/ReportView';
// import { authOperations, authSelectors } from 'redux/auth';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import HomePage from './views/HomePage';
// import NotFoundView from './views/NotFoundView/NotFoundView.jsx';

// function App() {
//   const [modal, setModal] = useState(false);
//   // const [modalActive, setModalActive] = useState(false);
//   // const sendBalance = () => {
//   //   setModal(false);
//   // };

//   // const [balance, setBalance] = useState(0);

//   //DatePicker -------------- BEGINNING -----------
//   // const [date, setDate] = useState(new Date().getDate());
//   // const [month, setMonth] = useState(new Date().getMonth() + 1);
//   // const [year, setYear] = useState(new Date().getFullYear());
//   // function onSelectedDate({ selectedDay, selectedMonth, selectedYear }) {
//   //   setDate(selectedDay);
//   //   setMonth(selectedMonth);
//   //   setYear(selectedYear);
//   // }
//   //DatePicker -------------- END-----------

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const isFetchingUser = useSelector(authSelectors.getIsFetchingUser);
//   // const isLoggedin = useSelector(authSelectors.getIsLoggedIn);
//   const isLoggedin = true;
//   const isGoogled = useSelector(authSelectors.getIsGoogled);

//   useEffect(() => {
//     dispatch(authOperations.fetchCurrentUser());
//     if (isGoogled) {
//       navigate('/report');
//     }
//     console.log("----------")
//     // eslint-disable-next-line
//   }, [isGoogled]);

//   return isFetchingUser ? (
//     <Loader />
//   ) : (
//     <div>
//       <Routes>
//         <Route exact path="/" element={<Navigate to="home" />} />
//         <Route
//           index
//           path="home"
//           element={
//             isLoggedin ? <Navigate replace to="/report" /> : <HomePage />
//           }
//         />
//         <Route exact path="home/:data" element={<HomePage />} />
//         {/* <Route
//           path="/main"
//           element={
//             isLoggedin ? (
//               <MainView
//                 name={'main'}
//                 // date={date}
//                 // setDate={setDate}
//                 // month={month}
//                 // setMonth={setMonth}
//                 // year={year}
//                 // setYear={setYear}
//                 // onSelectedDate={onSelectedDate}
//                 modal={modal}
//                 setModal={setModal}
//               />
//             ) : (
//               <Navigate replace to="/" />
//             )
//           }
//         />
//         <Route
//           path="/report"
//           element={
//             isLoggedin ? (
//               <ReportView
//                 name={'report'}
//                 // date={date}
//                 // setDate={setDate}
//                 // month={month}
//                 // setMonth={setMonth}
//                 // year={year}
//                 // setYear={setYear}
//                 modal={modal}
//                 setModal={setModal}
//               />
//             ) : (
//               <Navigate replace to="/" />
//             )
//           }
//         />
//         <Route
//           path="*"
//           element={
//             <NotFoundView>
//               <Loader />
//             </NotFoundView>
//           }
//         />
//       </Routes> */}
//     </div>
//   );
// }

// export default App;
