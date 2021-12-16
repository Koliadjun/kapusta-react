import React from 'react';
import './App.css';
// import RegistrationForm from './components/RegistrationForm'
// import ButtonsBlock from 'components/ButtonsBlock/ButtonsBlock';
// import Modal from 'components/Modal/Modal';
// import ModalContent from 'components/ModalContent/ModalContent';
// import AppBar from 'components/AppBar/AppBar';
// import Summary from 'components/Summary/Summary';
import { ReduxTest } from 'components/reduxTest/ReduxTest';

function App() {
  // const [modalActive, setModalActive] = useState(false);
  return (
    <div>
      {/* <RegistrationForm /> */}
      {/* <AppBar /> */}
      <ReduxTest />
      {/* <ButtonsBlock /> */}
      {/* <Modal active={modalActive} setActive={setModalActive}>
        <ModalContent
          message={'Вы уверены?'}
          textLeftButton={'да'}
          textRightButton={'нет'}
        />
      </Modal> */}

      {/* <button onClick={() => setModalActive(true)}>Проверка модалки</button> */}
      {/* <Summary /> */}
    </div>
  );
}

export default App;
