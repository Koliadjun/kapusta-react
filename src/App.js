import React, { useState } from 'react';
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
import Loader from 'components/Loader/Loader' 
import CategoryList from 'components/CategoryList';

function App() {
  const [modal, setModal] = useState(true);
  const [modalActive, setModalActive] = useState(false);
  const sendBalance = () => {
    setModal(false);
  };

  const [balance, setBalance] = useState(0);

  return (
    <div>
      <RegistrationForm />
      <AppBar />
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
      <Summary />
      <BalanceModal visible={modal} setVisible={setModal}>
        <Wrapper>
          <Input sendBalance={sendBalance} setBalance={setBalance} />

          <Content />
        </Wrapper>
      </BalanceModal>
      {!modal === true && <BalanceForm balance={balance} />}
      <Loader />
      <CategoryList/>
    </div>
  );
}

export default App;
