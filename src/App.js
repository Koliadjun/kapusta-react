import React, { useState } from 'react';
import {
  Routes,
  Route,
  Link,
  Outlet,
  Navigate
} from "react-router-dom";
import RegistrationForm from './components/RegistrationForm';
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

import CommentView from './views/CommentView'
import HomeView from './views/HomeView'
import ReportView from './views/ReportView'

function App() {
  const [modal, setModal] = useState(true);
  const [modalActive, setModalActive] = useState(false);
  const sendBalance = () => {
    setModal(false);
  };
  const balance = 55000.55;

  return (
    <div>
      <Routes>
          <Route exact path="/" element={<Navigate to="home" />} />
          <Route index path="home" element={<HomeView />} />
          <Route exact path="home/:data" element={<HomeView />} />
          <Route path="comment" element={<Navigate replace to="/report" />} n/>
          <Route path="report" element={<ReportView />} />
        </Routes>
      {/* <AppBar />
      <ButtonsBlock />
      <IncomeSpendSection /> */}
      {/* <Modal active={modalActive} setActive={setModalActive}>
        <ModalContent
          message={'Вы уверены?'}
          textLeftButton={'да'}
          textRightButton={'нет'}
        />
      </Modal> */}
      {/* <button onClick={() => setModalActive(true)}>Проверка модалки</button>
      <Summary /> */}
      {/* <BalanceModal visible={modal} setVisible={setModal}>
        <Wrapper>
          <Input sendBalance={sendBalance} />

          <Content />
        </Wrapper>
      </BalanceModal> */}
      {/* {!modal === true && <BalanceForm balance={balance} />} */}
    </div>
  );
}

export default App;
