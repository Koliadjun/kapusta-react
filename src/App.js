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

// import './App.css';
import Transactionslist from 'components/Transactionslist/Transactionslist';
import Container from 'components/Container/Container';
// import RegistrationForm from './components/RegistrationForm';
// import ButtonsBlock from 'components/ButtonsBlock/ButtonsBlock';
// import Modal from 'components/Modal/Modal';
// import ModalContent from 'components/ModalContent/ModalContent';
// import AppBar from 'components/AppBar/AppBar';
// import Summary from 'components/Summary/Summary';
import InputBalance from 'components/InputBalance/InputBalance';
import InputRegister from 'components/InputRegister/InputRegister';
import InputDescriptionProduct from 'components/InputDescriptionProduct/InputDescriptionProduct';
// import HomePage from './view/HomePage';
// import BalanceModal from './components/InitialBalanceFormModal/Modal/BalanceModal';
// import Content from 'components/InitialBalanceFormModal/Content/Content';
// import Input from 'components/InitialBalanceFormModal/Input/Input';
// import Wrapper from 'components/InitialBalanceFormModal/Wrapper/Wrapper';
// import BalanceForm from 'BalanceForm/BalanceForm';
import Tabs from 'components/Tabs/Tabs';
// import Loader from 'components/Loader/Loader';


function App() {
  // const [modal, setModal] = useState(true);
  // const [modalActive, setModalActive] = useState(false);
  // const sendBalance = () => {
  //   setModal(false);
  // };

  // const [balance, setBalance] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const isFetchingUser = useSelector(authSelectors.getIsFetchingUser);
  const isLoggedin = useSelector(authSelectors.getIsLoggedIn);
  const isGoogled = useSelector(authSelectors.getIsGoogled);


  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    if (isGoogled) {
      navigate('/report')
    }
  }, [dispatch, isGoogled]);

  return isFetchingUser ? (
    <Loader />
  ) : (
    <div>

      <Container>
        <Transactionslist />
        <InputBalance></InputBalance>
        <InputRegister></InputRegister>
        <InputDescriptionProduct></InputDescriptionProduct>
      </Container>

      <Tabs />
      {/* <HomePage></HomePage> */}

      {/* <RegistrationForm />
      <AppBar />
      <ButtonsBlock /> */}
      {/* <Modal active={modalActive} setActive={setModalActive}>
        <ModalContent
          message={'Вы уверены?'}
          textLeftButton={'да'}
          textRightButton={'нет'}
        />
      </Modal> */}
      {/* <button onClick={() => setModalActive(true)}>Проверка модалки</button> */}
      {/* <BalanceModal visible={modal} setVisible={setModal}>
        <Wrapper>
          <Input sendBalance={sendBalance} setBalance={setBalance} />


      <button onClick={() => setModalActive(true)}>Проверка модалки</button>
      <Summary /> */}

      {/* <Content />
        </Wrapper>

      </BalanceModal>
      {!modal === true && <BalanceForm balance={balance} />}
      <Loader />
      <CategoryList/>

      </BalanceModal> } */}
      {/* {!modal === true && <BalanceForm balance={balance} />} */}
      {/* <Loader /> */}

    </div>
  );
}

export default App;
