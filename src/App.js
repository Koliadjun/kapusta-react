import React, { useState } from 'react';
import {
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
  useNavigate,
} from 'react-router-dom';
// import RegistrationForm from './components/RegistrationForm';
import CategoryList from 'components/CategoryList';
import ButtonsBlock from 'components/ButtonsBlock/ButtonsBlock';
import Modal from 'components/Modal/Modal';
import ModalContent from 'components/ModalContent/ModalContent';
import AppBar from 'components/AppBar/AppBar';
import Summary from 'components/Summary/Summary';
import BalanceModal from './components/InitialBalanceFormModal/Modal/BalanceModal';
import Content from 'components/InitialBalanceFormModal/Content/Content';
import Input from 'components/InitialBalanceFormModal/Input/Input';
import Wrapper from 'components/InitialBalanceFormModal/Wrapper/Wrapper';
import BalanceForm from 'BalanceForm/BalanceForm';
import IncomeSpendSection from 'components/IncomeSpendSection/IncomeSpendSection';
import Loader from 'components/Loader';

import CommentView from './views/CommentView';
import HomeView from './views/HomeView';

import { authOperations, authSelectors } from 'redux/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from './views/HomePage';

// import './App.css';
// import Transactionslist from 'components/Transactionslist/Transactionslist';
import Container from 'components/Container/Container';

// import InputBalance from 'components/InputBalance/InputBalance';
// import InputRegister from 'components/InputRegister/InputRegister';
// import InputDescriptionProduct from 'components/InputDescriptionProduct/InputDescriptionProduct';
// import HomePage from './view/HomePage';
// import BalanceModal from './components/InitialBalanceFormModal/Modal/BalanceModal';
// import Content from 'components/InitialBalanceFormModal/Content/Content';
import CategoryImagesList from 'components/CategoryImages/CategoryImagesList/CategoryImagesList';
// import Tabs from 'components/Tabs/Tabs';
import ReportView from './views/ReportView/ReportView';

function App() {
  const [modal, setModal] = useState(true);
  const [modalActive, setModalActive] = useState(false);
  const sendBalance = () => {
    setModal(false);
  };

  const [balance, setBalance] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isFetchingUser = useSelector(authSelectors.getIsFetchingUser);
  const isLoggedin = useSelector(authSelectors.getIsLoggedIn);
  const isGoogled = useSelector(authSelectors.getIsGoogled);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    if (isGoogled) {
      navigate('/report');
    }
  }, [dispatch, isGoogled]);

  return isFetchingUser ? (
    <Loader />
  ) : (
    <div>
      {/* <ButtonsBlock /> */}
      <Modal active={modalActive} setActive={setModalActive} />
      <AppBar />
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
        <Route
          path="report"
          element={isLoggedin ? <ReportView /> : <Navigate replace to="/" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* 
      <ButtonsBlock />
      <IncomeSpendSection />
      <Modal active={modalActive} setActive={setModalActive}>
        <ModalContent
          message={'Вы уверены?'}
          textLeftButton={'да'}
          textRightButton={'нет'}
        />
      </Modal>
      <button onClick={() => setModalActive(true)}>Проверка модалки</button>
      <BalanceModal visible={modal} setVisible={setModal}>
        <Wrapper>
          <Input sendBalance={sendBalance} setBalance={setBalance} />

          <button onClick={() => setModalActive(true)}>Проверка модалки</button>
          <Summary />

          <Content />
        </Wrapper>
      </BalanceModal>
      {!modal === true && <BalanceForm balance={balance} />}
      <Loader />
      <CategoryList />
      <CategoryImagesList />

      <button onClick={() => setModalActive(true)}>Проверка модалки</button>
      <Summary />
      <BalanceModal visible={modal} setVisible={setModal}>
        <Wrapper>
          <Input sendBalance={sendBalance} setBalance={setBalance} />

          <Content />
        </Wrapper>
      </BalanceModal>
      {!modal === true && <BalanceForm balance={balance} />}
      <Loader /> */}
    </div>
  );
}

export default App;
