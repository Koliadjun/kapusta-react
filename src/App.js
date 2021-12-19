import React, { useState } from 'react';
// import './App.css';
import Transactionslist from 'components/Transactionslist/Transactionslist';
import Container from 'components/Container/Container';
import RegistrationForm from './components/RegistrationForm';
import ButtonsBlock from 'components/ButtonsBlock/ButtonsBlock';
import Modal from 'components/Modal/Modal';
import ModalContent from 'components/ModalContent/ModalContent';
import AppBar from 'components/AppBar/AppBar';
import Summary from 'components/Summary/Summary';
import InputBalance from 'components/InputBalance/InputBalance';
import InputRegister from 'components/InputRegister/InputRegister';
import InputDescriptionProduct from 'components/InputDescriptionProduct/InputDescriptionProduct';

function App() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div>
      <Container>
        <Transactionslist />
        <InputBalance></InputBalance>
        <InputRegister></InputRegister>
        <InputDescriptionProduct></InputDescriptionProduct>
      </Container>
      {/* <RegistrationForm />
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
      <Summary /> */}
    </div>
  );
}

export default App;
