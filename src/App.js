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
import HomeView from './views/HomePage/HomePage';
import ReportView from './views/ReportView';
import { authOperations, authSelectors } from 'redux/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  }, [dispatch, isGoogled, navigate]);

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
            isLoggedin ? <Navigate replace to="/report" /> : <HomeView />
          }
        />
        <Route exact path="home/:data" element={<HomeView />} />
        <Route
          path="comment"
          element={isLoggedin ? <CommentView /> : <Navigate replace to="/" />}
        />
        {/* <Route
          path="report"
          element={isLoggedin ? <ReportView /> : <Navigate replace to="/" />}
        />  */}

        {/* <Route
          path="report"
          element={isLoggedin ? <ReportView /> : <Navigate replace to="/" />}
        />
        <Route path="*" element={<Navigate to="/" />} />  */}
      </Routes>
    </>
  );
}

export default App;
