import React, { useState } from 'react';

import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import AppBar from '../components/AppBar/AppBar';
import ButtonsBlock from '../components/ButtonsBlock/ButtonsBlock';
import IncomeSpendSection from '../components/IncomeSpendSection/IncomeSpendSection';
import ModalContent from '../components/ModalContent/ModalContent';
import Summary from '../components/Summary/Summary';
import Wrapper from '../components/InitialBalanceFormModal/Wrapper/Wrapper';
import Input from '../components/InitialBalanceFormModal/Input/Input';
import Content from '../components/InitialBalanceFormModal/Content/Content';
import BalanceLine from '../components/BalanceLine/BalanceLine';
import Loader from '../components/Loader/Loader';
import Modal from '../components/Modal/Modal';
import BalanceModal from '../components/InitialBalanceFormModal/Modal/BalanceModal';
import Container from 'components/Container/Container';
import Datepicker from 'components/DatePicker/Datepicker';

function MainPage({
  balance,
  setBalance,
  modal,
  setModal,
  name,
  date,
  month,
  year,
  onSelectedDate,
}) {
  // const [modal, setModal] = useState(true);
  const [modalActive, setModalActive] = useState(false);
  const sendBalance = () => {
    setModal(false); /////////////// need to replace to UserModel, IMHO
  };

  // const [balance, setBalance] = useState(0);

  return (
    <div>
      <Container>
        <AppBar />
        <BalanceLine modal={modal} balance={balance} name={name} />
        <div style={{ margin: 20 }}>
          <Datepicker
            date={date}
            month={month}
            year={year}
            onSelectedDate={onSelectedDate}
          />
        </div>

        <RegistrationForm />
        <ButtonsBlock />
        <IncomeSpendSection />

        <button onClick={() => setModalActive(true)}>Проверка модалки</button>
        <Summary />
      </Container>
      <Modal active={modalActive} setActive={setModalActive}>
        <ModalContent
          message={'Вы уверены?'}
          textLeftButton={'да'}
          textRightButton={'нет'}
        />
      </Modal>
      <BalanceModal visible={modal} setVisible={setModal}>
        <Wrapper>
          <Input sendBalance={sendBalance} setBalance={setBalance} />

          <Content />
        </Wrapper>
      </BalanceModal>

      <Loader />
    </div>
  );
}
export default MainPage;
