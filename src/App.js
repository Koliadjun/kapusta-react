import React, { useState } from 'react';

import './App.css';
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

function App() {
  const [modal, setModal] = useState(true);
  const [modalActive, setModalActive] = useState(false);
  const sendBalance = () => {
    setModal(false);
  };
  const balance = 55000.55;

  return (
    <div>
      <RegistrationForm />
      <AppBar />
      <ButtonsBlock />
      <Modal active={modalActive} setActive={setModalActive}>
        <ModalContent
          message={'Вы уверены?'}
          textLeftButton={'да'}
          textRightButton={'нет'}
        />
      </Modal>

      <button onClick={() => setModalActive(true)}>Проверка модалки</button>
      <Summary />
      <BalanceModal visible={modal} setVisible={setModal}>
        <Wrapper>
          <Input sendBalance={sendBalance} />

          <Content />
        </Wrapper>
      </BalanceModal>
      <BalanceForm balance={balance} />
    </div>
  );
}

export default App;
