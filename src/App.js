import React, { useState } from 'react';
import './App.css';

import ButtonsBlock from 'components/ButtonsBlock/ButtonsBlock';
import Modal from 'components/Modal/Modal';
import ModalContent from 'components/ModalContent/ModalContent';

function App() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div>
      <ButtonsBlock />
      <Modal active={modalActive} setActive={setModalActive}>
        <ModalContent
          message={'Вы уверены?'}
          textLeftButton={'да'}
          textRightButton={'нет'}
        />
      </Modal>

      <button onClick={() => setModalActive(true)}>Проверка модалки</button>
    </div>
  );
}

export default App;
