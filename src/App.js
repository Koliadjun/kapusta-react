import React, { useState } from 'react';

import './App.css';

import ButtonsBlock from 'components/ButtonsBlock/ButtonsBlock';
import Summary from 'components/Summary/Summary';
import BalanceModal from './components/InitialBalanceFormModal/Modal/BalanceModal';
import Content from 'components/InitialBalanceFormModal/Content/Content';
import Input from 'components/InitialBalanceFormModal/Input/Input';
import Wrapper from 'components/InitialBalanceFormModal/Wrapper/Wrapper';

function App() {
  const [modal, setModal] = useState(true);
  const sendBalance = () => {
    setModal(false);
  };

  return (
    <div>
      {/* <ButtonsBlock />
      <Summary /> */}
      <BalanceModal visible={modal} setVisible={setModal}>
        <Wrapper>
          <Input sendBalance={sendBalance} />

          <Content />
        </Wrapper>
      </BalanceModal>
    </div>
  );
}

export default App;
